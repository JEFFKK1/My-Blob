import { MongoClient } from "mongodb";
import { connectDatabase, insertDocument } from "../../helpers/db.util";
export default async function handler(req, res) {
 if (req.method === 'POST') {
  const {email,name,message } = req.body
    
    if(!email ||
    !email.includes('@') ||
    !name ||
    name.trim() === '' ||
    !message ||
    message.trim() === '') {
      res.status(422).json({message: 'invalid data entered'})
      return
    }
   // store  in db  
    const newMessage = {
      email,
      name,
      message
    }
    try {
      var client = await connectDatabase();
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "DB connection failed" });
      return;
    }
    try {
      await insertDocument(client, 'blog',{ email: email ,name:name , message:message});
      client.close;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Data Insert failed" });
      return;
    }
    console.log(newMessage);
    res
      .status(201)
      .json({message:'Message succesfully stored'})
    
 }
}
