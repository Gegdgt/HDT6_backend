// import { MongoClient, ServerApiVersion } from "mongodb";

// const URI = process.env.ATLAS_URI || "mongodb+srv://SebasJuarez:Hola@proyecto1.yjyznsb.mongodb.net/";
// const client = new MongoClient(URI, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// try {
//   // Connect the client to the server
//   await client.connect();
//   // Send a ping to confirm a successful connection
//   await client.db("Proyecto").command({ ping: 1 });
//   console.log("Pinged your deployment. You successfully connected to MongoDB!");
// } catch (err) {
//   console.error(err);
// }

// let db = client.db("employees");

// export default db;