const { connectToMongo } = require('@config/connection')
const fs = require('fs')
const emoji = require('node-emoji')
const BLOCKS = require('cli-block')
const clear = require('clear')
const Listr = require('listr')

clear()
BLOCKS.BLOCK_START("Let's go")
BLOCKS.BLOCK_LINE()
BLOCKS.BLOCK_LINE('Te Esuchamos ~ User Microservice')
BLOCKS.BLOCK_END()

const validFileEnv = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(`${process.cwd()}/.env`) && process.env.NODE_ENV !== 'production')
      reject('The environment file is not found, so the server cannot run.')
    resolve()
  })
}

const setupServer = new Listr([
  {
    title: 'Checking Environment',
    task: async (): Promise<void> => {
      await validFileEnv().catch(e => {
        throw new Error(e)
      })
    },
  },
  {
    title: `${emoji.get('sunglasses')} Verifying the connection to the database`,
    task: async (): Promise<void> => {
      await connectToMongo().catch(() => {
        throw new Error('Could not validate connection to database.')
      })
    },
  },
])

module.exports = {
  setup: setupServer,
}
