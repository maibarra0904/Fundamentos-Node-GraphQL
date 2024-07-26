import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { User } from "./interfaces/User.interface";
import { typeDefs } from './types/index';
import { resolvers } from './resolvers/index';

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