const { User } = require('../../api/models/User')
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')

let mongoServer
const opts = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.Promise = global.Promise
mongoose.set('useFindAndModify', false)
mongoose.set('toObject', { useProjection: true })
mongoose.set('toJSON', { useProjection: true })

jest.mock('moment-timezone', () => {
  return () => ({
    format: jest.fn().mockReturnThis(),
    tz: jest.fn().mockReturnThis(),
  })
})

describe('Testing User Servie', () => {
  beforeAll(async () => {
    mongoServer = new MongoMemoryServer()
    const mongoUri = await mongoServer.getUri()
    await mongoose.connect(mongoUri, opts, err => {
      if (err) console.error(err)
    })
  })

  afterAll(async () => {
    await mongoose.disconnect()
    await mongoServer.stop()
  })

  it('Should count the number of users', async () => {
    const count = await User.countDocuments()
    expect(count).toEqual(0)
  })
})
