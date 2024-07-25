import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { User } from "./interfaces/User.interface";

// Tipo Query
const typeDefs = `#graphql

    type Rol {
        name: String!
    }

    type User {
        name: String!
        email: String
        rol: Rol
    }

    type Query {
        users: [User!]!
        roles: [Rol]
    }
`;

const users:User[] = [
    {
        name: "John",
        email: "john@example.com",
        rol: {
            name: "User"
        }
    },
    {
        name: "Mario",
        email: "alberto@example.com"
    },
    {
        name: "Evelyn",
        email: "evelyn@example.com"
    }
];

const roles = [
    {
        name: "User",
    },
    {
        name: "Admin",
    },
    {
        name: "Dev",
    }
];

// Resolvers
const resolvers = {
    Query: {
        users: () => users,
        roles: () => roles
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