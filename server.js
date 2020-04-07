const express = require('express');
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,  // database schema
  graphiql: true  // this is graphql client for writing and mutating queries
}))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log("server running on port", PORT))