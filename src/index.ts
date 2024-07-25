import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Tipo Query
const typeDefs = `#graphql
    type User {
        name: String
        email: String
    }

    type Query {
        users: [User!]!
    }
`;

const users = [
    {
        name: "John",
        email: "john@example.com"
    },
    {
        name: "Alberto",
        email: "alberto@example.com"
    },
    {
        name: "Evelyn",
        email: "evelyn@example.com"
    }
];

// Resolvers
const resolvers = {
    Query: {
        users: () => users
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

// Inicia el servidor
async function startServer() {
    const {url} = await startStandaloneServer(server, {
        listen: {
            port: 4000
        }
    });
    console.log(`🚀 Servidor Apollo listo en ${url}`);
}

startServer();