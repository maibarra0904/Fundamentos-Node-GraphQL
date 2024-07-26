import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from './types/index';
import { resolvers } from './resolvers/index';
//import { MyContext } from './context/index';

const server = new ApolloServer({ typeDefs, resolvers });

// Inicia el servidor
async function startServer() {
    const {url} = await startStandaloneServer(server, {
        listen: {
            port: 4000
        },
        context: async ({ req }) => {
            // Agregar el contexto de la API consumida
            const posts = await resolvers.Query.getPosts();
            //console.log(posts)
            return posts;
          },
    });
    console.log(`🚀 Servidor Apollo listo en ${url}`);
}


startServer();