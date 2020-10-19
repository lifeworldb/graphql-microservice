import { GraphQLClient } from 'graphql-request'
import { RequestDocument, Variables } from 'graphql-request/dist/types'
import { environment } from '@config/environment'

interface HeaderOptions {
  header: string
  value: string
}

class GraphqlClient {
  private client: GraphQLClient
  private static instance: GraphqlClient

  constructor() {
    this.client = new GraphQLClient(environment.apollo.gateway)
  }

  static getInstance(): GraphqlClient {
    if (!GraphqlClient.instance) GraphqlClient.instance = new GraphqlClient()
    return GraphqlClient.instance
  }

  query<T = any, V = Variables>(document: RequestDocument, variables?: V, headers?: [HeaderOptions]): Promise<T> {
    headers?.forEach(header => {
      this.client.setHeader(header.header, header.value)
    })
    return this.client.request(document, variables)
  }

  mutation<T = any, V = Variables>(document: RequestDocument, variables?: V, headers?: [HeaderOptions]): Promise<T> {
    headers?.forEach(header => {
      this.client.setHeader(header.header, header.value)
    })
    return this.client.request(document, variables)
  }
}

export default GraphqlClient
