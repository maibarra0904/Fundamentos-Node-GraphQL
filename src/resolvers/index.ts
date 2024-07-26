import { roles } from "../data/roles.data";
import { users } from "../data/users.data";

export const resolvers = {
    Query: {
        users: () => users,
        roles: () => roles,
        user: (parent, args, context, info) => {
            
            const {id} = args
            console.log(id.id)
            //console.log(users)
            
            return users.filter(user => user.id == id?.id)

        }
    }
};