import userRoutes from "./routes/user";
import { appDataSource } from "./data-source";
import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
require("dotenv").config();


const app: FastifyInstance = fastify()

app.register(userRoutes, {prefix: 'users'});
app.get("/", (request: FastifyRequest, reply: FastifyReply): FastifyReply => {
  return reply.status(200).send("Welcome to Fastify-TypeORM App 🤟");
});

const port: number = Number(process.env.PORT) || 3003;

const start = async (): Promise<void> => {
  try {
    await appDataSource.initialize()
    console.log("Database successfully connected");
    app.listen({port}, (err, address) => {
      if (!err) {
        console.log("Server is listening at:",port)
      }
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();
