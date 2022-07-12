require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./models/schema");
const express = require("express");
const app = express();
const port = process.env.PORT || 5001;
const Db = require("./config");
const cors= require("cors")
app.use(cors())
Db();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development" ? true : false,
  })
);

app.listen(port, () => console.log("server is listening on port", port));
