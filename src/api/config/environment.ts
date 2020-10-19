const defaultPort = 4000
const defaultHostMongo = 'localhost'
const defaultPortMongo = 27017
const defaultDatabaseMongo = 'dbMongo'

interface Environment {
  apollo: {
    gateway: string
    introspection: boolean
    playground: boolean
  }
  mongo: {
    atlas: boolean
    host: string
    port: number | string
    db: string
    user: string
    pass: string
  }
  time: {
    tz: string
    format: string
  }
  port: number | string
  googleLogging: boolean
}

export const environment: Environment = {
  apollo: {
    gateway: process.env.APOLLO_GATEWAY || '',
    introspection: process.env.APOLLO_INTROSPECTION === 'true',
    playground: process.env.APOLLO_PLAYGROUND === 'true',
  },
  mongo: {
    atlas: process.env.MONGO_ATLAS === 'true',
    host: process.env.MONGO_HOST || defaultHostMongo,
    port: process.env.MONGO_PORT || defaultPortMongo,
    db: process.env.MONGO_DB || defaultDatabaseMongo,
    user: process.env.MONGO_USR || '',
    pass: process.env.MONGO_PAS || '',
  },
  time: {
    tz: process.env.TZ || '',
    format: process.env.TIME_FORMAT || '',
  },
  port: process.env.PORT || defaultPort,
  googleLogging: process.env.GOOGLE_LOGGING === 'true',
}
