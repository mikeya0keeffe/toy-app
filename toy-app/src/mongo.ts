import { MongoClient } from "mongodb";
import { Patient } from "./types";

// Replace the uri string with your connection string.

const user = process.env.MONGO_INITDB_ROOT_USERNAME
const pass = process.env.MONGO_INITDB_ROOT_PASSWORD
const host = process.env.MONGO_HOST
const port = process.env.MONGO_PORT
const uri = 
  `mongodb://${user}:${pass}@${host}:${port}?retryWrites=true&w=majority`;
const client = new MongoClient(uri);
export async function run(): Promise<Patient[]> {
  try {
    console.log(uri)
    const database = client.db('medical');
    const patients = database.collection('patients');
    // Query for a movie that has the title 'Back to the Future'
    const query = { name: 'Mike' };
    const patient = await patients.find();
    const returnList = []
    await patient.forEach(patient => {returnList.push(patient)}).catch((e) => {console.log(e)});
    return returnList
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}


