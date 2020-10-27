import { reactive } from '@vue/composition-api';
import { MongoClient } from 'mongodb';
// import { URI, ENVIRONMENT,DATABASE } from config
const uri = 'mongodb://root:password@mongodb:27017';
const dbName = 'Primary';
const ENVIRONMENT = 'development';

const client = new MongoClient(uri);

export async function update(collectionName: string, query) {
  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    await collection.insertOne(query);
  } finally {
    await client.close();
  }
}
export async function read(collectionName: string, query) {
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
