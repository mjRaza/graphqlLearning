const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const userschema = require("./schema/schema");
const resolver = require("./resolver/resolver");
var { buildSchema } = require("graphql");
const mongoose = require("mongoose");

var connectionStringForMongo =
  "mongodb+srv://admin:admin@cluster0.javu4.mongodb.net/GRAPHQL?retryWrites=true&w=majority";
mongoose
  .connect(
    connectionStringForMongo,
    { useNewUrlParser: true ,useUnifiedTopology: true},
  )
  .then(() => console.log("MongoDb connected"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: userschema,
    rootValue: resolver,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log(`Server started on port`);
});
