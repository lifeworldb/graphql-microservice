# Graphql Microservice

This project is a quick start base for a microservice in Graphql with Mongo and Jest.

## Starting the microservice

### 1. Cloning Repository

```bash
$ https://github.com/lifeworldb/graphql-microservice.git
```

### 2. Installing Dependencies

```bash
$ cd graphql-microservice

$ yarn

or

$ npm install
```

## Before running the microservice

To prepare the environment for the execution of the microservice, you must create the `.env` file which defines the environment variables for the execution of the microservice.

You can create a copy of the `.env.example` file and rename it to` .env`.

### Explaining `.env` file

El archivo de `.env.example` contiene las siguientes variables:

|       variable       |                                                                                                                                                       Description                                                                                                                                                       |          Default Value          |
|:--------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-------------------------------:|
| PORT                 | Defines the port on which the microservice will run                                                                                                                                                                                                                                                                     |               4000              |
| TZ                   | Defines the time zone for logging                                                                                                                                                                                                                                                                                       |          America/Bogota         |
| TIME_FORMAT          | Defines the LA output format for dates that use moment timezone                                                                                                                                                                                                                                                         |      "MM/D/YYYY, h:mm:ss a"     |
| GOOGLE_LOGGING       | Defines if the log records should be sent to Google's log record                                                                                                                                                                                                                                                        |              false              |
| APOLLO_GATEWAY       | Defines the url of the gateway to establish connection with Graphql Client and be able to consume other microservices                                                                                                                                                                                                   | "http://localhost:4000/graphql" |
| APOLLO_INTROSPECTION | If true, enables schema introspection by clients.<br/>  The default value is true, unless the NODE_ENV environment variable is set to production.                                                                                                                                                                       |               true              |
| APOLLO_PLAYGROUND    | If truthy, the server hosts GraphQL Playground from its URL. Can be an object to pass configuration options to the playground.<br/> The default value is true, unless the NODE_ENV environment variable is set to production.<br/> Note that introspection must be enabled for GraphQL Playground to function properly. |               true              |
| MONGO_ATLAS          | Defines if the connection to Mongo must be to a Mongo Atlas server or to any other server                                                                                                                                                                                                                               |              false              |
| MONGO_HOST           | Mongo hostname or mongo server ip                                                                                                                                                                                                                                                                                       |            localhost            |
| MONGO_PORT           | Mongo server port                                                                                                                                                                                                                                                                                                       |              27017              |
| MONGO_DB             | Name of the mongo server database                                                                                                                                                                                                                                                                                       |             apolloDB            |
| MONGO_USR            | Mongo server user                                                                                                                                                                                                                                                                                                       |               user              |
| MONGO_PAS            | Mongo server user password                                                                                                                                                                                                                                                                                              |               pass              |

### Running the microservice

```bash
$ yarn start:dev

or

$ npm run start:dev
```

