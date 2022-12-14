const { ApolloServer, gql } = require('apollo-server')

let messagesList = []

const typeDefs = gql`
  type Message {
    message: String 
  }

  type Query {
    messages: [Message!]!
  }

  type Mutation {
    addMessage(message: String): [Message!]!
  }
`

const resolvers = {
  Query: {
    messages: () => messagesList,
  },
  Mutation: {
    addMessage: (root,args) => {
        messagesList = [...messagesList, {...args}]
        return messagesList
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})