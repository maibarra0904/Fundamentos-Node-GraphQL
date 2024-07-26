import {v4 as uuid} from "uuid"
import { User } from "../interfaces/User.interface";

export const users:User[] = [
    {
        id: uuid(),
        name: "John",
        email: "john@example.com",
        rol: {
            name: "user"
        }
    },
    {
        id: uuid(),
        name: "Mario",
        email: "alberto@example.com",
        rol: {
            name: "admin"
        }
    },
    {
        id: uuid(),
        name: "Evelyn",
        email: "evelyn@example.com",
        rol: {
            name: "user"
        }
    }
];