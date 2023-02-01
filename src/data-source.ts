import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const appDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "root",
    password: "testpass",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})

