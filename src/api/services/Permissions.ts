import { and, rule, shield, or } from 'graphql-shield'

const isAuthenticated = rule()(async (parent, args, { user }) => {
  console.log('MY SERVICE: ', user)
  return true
})

const permissions = shield({
  Query: {
    getUser: isAuthenticated,
  },
})

export default permissions
