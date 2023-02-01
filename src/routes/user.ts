import { FastifyInstance } from "fastify";
import {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../controllers/user";


export default function (fastify: FastifyInstance, opts: any, done: any) {
  fastify.post("/", {}, createUser);
  fastify.get("/", {}, getUsers);
  fastify.get("/:id", {}, getUser);
  fastify.put("/:id", {}, updateUser);
  fastify.delete("/:id", {}, deleteUser);
  done()
}
