export const typeDefs = `#graphql

type Rol {
    name: String!
}

input UserID {
    id: ID
}

type User {
    id: ID
    name: String
    email: String
    rol: Rol!
}

type Query {
    users: [User!]!
    user(id: UserID!): User
    roles: [Rol]
    getPosts: [Post]!
    posts: [Post]!
}

type Post {
    id: ID!
    title: String!
    body: String!
  }

`;