const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schecma/schema");
const mongoose = require("mongoose");

const app = express();

// const MongoClient = require("mongodb").MongoClient;
// const uri =
//   "mongodb+srv://holdmypotion:holdmypotionpassword@cluster0.nwwwz.mongodb.net/Cluster0?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   console.log("Connected to the Db");
//   client.close();
// });

mongoose.connect(
  "mongodb+srv://holdmypotion:holdmypotionpassword@cluster0.nwwwz.mongodb.net/db?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once("open", () => {
  console.log("connected to the database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("now listening for request on port 4000");
});
