import { environment } from '@config/environment'
import { LoggerOptions, transports, createLogger, format } from 'winston'
import moment from 'moment-timezone'

const { combine, label, printf } = format
const { LoggingWinston } = require('@google-cloud/logging-winston')
const loggingWinston = new LoggingWinston()

const logFormat = printf(({ level, message, label }) => {
  return `[${label}] [${moment()
    .tz(environment.time.tz)
    .format('dddd, MM/D/YYYY, h:mm:ss a')}] ${level}: ${message}`
})

const options: LoggerOptions = environment.googleLogging
  ? {
      level: 'info',
      transports: [new transports.Console(), loggingWinston],
    }
  : {
      level: 'info',
      format: combine(logFormat),
      transports: [
        new transports.File({ filename: './logs/general.log' }),
        new transports.File({ filename: './logs/errors.log', level: 'error' }),
      ],
    }

const Logger = createLogger(options)

if (process.env.NODE_ENV !== 'production') {
  Logger.add(
    new transports.Console({
      format: combine(label({ label: 'Development' }), logFormat),
      level: 'debug',
    }),
  )
}
Logger.info('Logging initialized at debug level')

export default Logger
