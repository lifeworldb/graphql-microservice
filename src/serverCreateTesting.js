const { ApolloServer } = require('apollo-server')
const { MongoClient } = require('mongodb')
const { mergeResolvers } = require('@graphql-toolkit/schema-merging')
const mongoose = require('mongoose')
const { loadFiles } = require('@graphql-toolkit/file-loading')
const { join } = require('path')

let mongoConnection
let mongoDB
const ext = process.env.NODE_ENV === 'production' ? 'js' : 'ts'

const createServerMongoGQL = mongoUrl => {
  const typeDefs = loadFiles(join(__dirname, 'graphql/schemas', '**/*.graphql'))
  const resolvers = mergeResolvers(loadFiles(join(__dirname, 'graphql/resolvers', `**/*.${ext}`)))

  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // autoReconnect: true,
    // reconnectTries: Number.MAX_VALUE,
    // reconnectInterval: 1000,
  }

  mongoConnection = mongoose.connect(mongoUrl, mongooseOpts)
  // mongoConnection = MongoClient.connect(mongoUrl)
  mongoDB = mongoConnection

  // const resolvers = {
  //   Query: {
  //     test: (parent, { id }) => {
  //       return 'Hello World'
  //     },
  //   },
  // }

  // The ApolloServer constructor
  const server = new ApolloServer({ typeDefs, resolvers })
  return server
}



module.exports.createServerMongoGQL = createServerMongoGQL
module.exports.getMongoConnection = () => mongoConnection
module.exports.getMongoDB = () => mongoDB
