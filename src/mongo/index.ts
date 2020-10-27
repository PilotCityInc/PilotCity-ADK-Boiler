import { computed, reactive } from '@vue/composition-api';
import { MongoClient } from 'mongodb';
import { Stitch, RemoteMongoClient } from 'mongodb-stitch-browser-sdk';

const uri = 'mongodb://root:password@mongodb:27017';
const dbName = 'Primary';

export const state: {
  dbType: 'development' | 'plugin';
  devClient: MongoClient;
  realmID: string | null;
} = reactive({
  dbType: 'development',
  devClient: new MongoClient(uri),
  realmID: null
});
// Dev environment
const devMethods = reactive({
  async update(collectionName: string, query: string) {
    try {
      await state.devClient.connect();
      const database = state.devClient.db(dbName);
      const collection = database.collection(collectionName);
      await collection.insertOne(query);
    } finally {
      await state.devClient.close();
    }
  },
  async read(collectionName: string, query: any) {
    try {
      await state.devClient.connect();
      const database = state.devClient.db(dbName);
      const collection = database.collection(collectionName);
      await collection.findOne(query);
    } finally {
      await state.devClient.close();
    }
  }
});

// Plugin Environment
const pluginClient = computed(() =>
  state.realmID
    ? Stitch.initializeDefaultAppClient(state.realmID).getServiceClient(
        RemoteMongoClient.factory,
        'mongodb-atlas'
      )
    : null
);
const pluginDb = computed(() => pluginClient?.value?.db('Primary'));
const pluginMethods = reactive({
  async update<T>(
    collection: string,
    payload: T,
    filter: { [x: string]: any },
    options?: { upsert: boolean }
  ) {
    return pluginDb.value?.collection<typeof payload>(collection).findOneAndUpdate(
      filter,
      {
        $set: payload
      },
      options
    );
  }
});

// db
export default computed(() => {
  if (state.dbType === 'development') {
    return {
      client: state.devClient,
      ...devMethods
    };
  }
  if (!state.realmID) throw new Error('Must include realmID if using plugin');
  return {
    client: pluginDb.value,
    ...pluginMethods
  };
});
