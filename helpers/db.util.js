import{ MongoClient } from "mongoDb";

export async function connectDatabase() {
  const conectionString = 
  `mongodb+srv://${process.env.mongoDb_UserName}:${process.env.mongoDb_UserPassWord}@${process.env.mongoDb_ClusterName}.gitin.mongodb.net/${process.env.mongoDb_DatabaseKey}?retryWrites=true&w=majority` 
  const uri = conectionString
 //   "mongodb+srv://jeffkk1:jk512jk99@cluster0.gitin.mongodb.net/MyApp?retryWrites=true&w=majority";
  const client = await MongoClient.connect(conectionString);
  return client;
  }

  export async function insertDocument(client, collection,document) {
    const db = client.db();
    const result =  await db.collection(collection).insertOne(document);
     return result;  
  }

  export async function getAllDocuments( client, collection, sort)
  {
    const db = client.db()
    const documents = await db.collection(collection)
      .find( )
      .sort(sort)
      .toArray();
      return documents;

  }