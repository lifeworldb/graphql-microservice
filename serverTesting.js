const { MongoMemoryServer } = require('mongodb-memory-server')
const { createServerMongo } = require('./src/serverCreateTesting')

const mongoServer = new MongoMemoryServer()
mongoServer
  .getUri()
  .then(uri => {
    console.log({ uri })
    console.log('mongo:    at http://localhost:8082')
    return createServerMongo(uri).listen(8082)
  })
  .catch(() => process.exit(1))
