import mongoose, { Mongoose } from 'mongoose'
import { environment } from '@config/environment'

mongoose.Promise = global.Promise
mongoose.set('useFindAndModify', false)
mongoose.set('toObject', { useProjection: true })
mongoose.set('toJSON', { useProjection: true })

const atlas = `mongodb+srv://${environment.mongo.user}:${environment.mongo.pass}@${environment.mongo.host}/${environment.mongo.db}?retryWrites=true&w=majority`
const other = `mongodb://${environment.mongo.host}:${environment.mongo.port}/${environment.mongo.db}`

const connectToMongo = (): Promise<Mongoose> => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(environment.mongo.atlas ? atlas : other, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => resolve())
      .catch(e => reject(e))
  })
}

export { connectToMongo }
