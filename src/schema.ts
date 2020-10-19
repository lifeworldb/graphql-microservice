import 'graphql-import-node'
import { loadFiles } from '@graphql-toolkit/file-loading'
import { mergeResolvers, mergeTypeDefs } from '@graphql-toolkit/schema-merging'
import { join } from 'path'
import { GraphQLSchema } from 'graphql'
import { buildFederatedSchema } from '@apollo/federation'

const ext = process.env.NODE_ENV === 'production' ? 'js' : 'ts'

const typeDefs = mergeTypeDefs(loadFiles(join(__dirname, 'graphql/schemas', '**/*.graphql')))
const resolvers = mergeResolvers(loadFiles(join(__dirname, 'graphql/resolvers', `**/*.${ext}`)))

const schema: GraphQLSchema = buildFederatedSchema([
  {
    typeDefs,
    resolvers,
  },
])

export default schema
