import { reactive } from '@vue/composition-api';
// import { URI, ENVIRONMENT,DATABASE } from config
let uri = '';
const dbName = 'DATABASE';
const ENVIRONMENT = 'development';
// const uri = 'mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&w=majority';

if (ENVIRONMENT === 'development') {
  import { MongoClient } from 'mongodb';
  // local
  uri = URI.development;
} else if (ENVIRONMENT === 'production') {
  // import { MongoClient } from 'mongodb'; //cloud
  uri = URI.production;
}

const client = new MongoClient(uri);

async function update(collectionName: string, query) {
  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    await collection.insertOne(query);
  } finally {
    await client.close();
  }
}
async function read(collectionName: string, query) {
  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    await collection.findOne(query);
  } finally {
    await client.close();
  }
}

export { update, read };
// EXAMPLE: update().catch(console.dir);
