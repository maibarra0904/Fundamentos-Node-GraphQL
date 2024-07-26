import { GraphQLError } from "graphql";
import { roles } from "../data/roles.data";
import { users } from "../data/users.data";
import fetch from 'node-fetch';
import { posts } from "../data/posts.data";

export const resolvers = {
    Query: {
        users: (parent, args, context, info) => users,
        posts: (parent, args, context, info) => posts,
        roles: () => roles,
        user: (parent, args, context, info) => {
            
            const {id} = args
            
            
            const user = users.filter(user => user.id == id?.id)

            if (!user[0]) throw new GraphQLError(`User with ${id.id} does not exist`,{
                extensions: {
                    code: 'NOT_FOUND'
                },
                path: ["usr"]
            })

            return user[0]

        },
        getPosts: async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            posts.push(data[0])
            return data;
          },
    }
};