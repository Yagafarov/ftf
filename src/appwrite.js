import { Client, Databases, Storage, ID ,Query } from "appwrite";

const client = new Client();
client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('6812873f002c54b9f409');

const databases = new Databases(client);
const storage = new Storage(client);
const PASSWORDS_COLLECTION = "6812acc70013445a4489";

export { client, databases, storage, ID,Query,PASSWORDS_COLLECTION  };
