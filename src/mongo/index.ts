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
  async update<T = any>(
    collection: string,
    payload: T,
    query: { [x: string]: any },
    options?: { upsert: boolean }
  ) {
    try {
      await state.devClient.connect();
      const database = state.devClient.db(dbName);
      await database.collection(collection).findOneAndUpdate(
        query,
        {
          $set: payload
        },
        options
      );
    } finally {
      await state.devClient.close();
    }
  },
  async read(collection: string, query: { [x: string]: any }) {
    try {
      await state.devClient.connect();
      const database = state.devClient.db(dbName);
      return await database.collection(collection).findOne(query);
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
  async update<T = any>(
    collection: string,
    payload: T,
    query: { [x: string]: any },
    options?: { upsert: boolean }
  ) {
    return pluginDb.value?.collection<typeof payload>(collection).findOneAndUpdate(
      query,
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
