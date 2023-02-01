import { RequestHandler, Request, Response, NextFunction } from "express";
import { DoneFuncWithErrOrRes, FastifyReply, FastifyRequest, RouteHandlerMethod } from "fastify";

import { User } from "../entity/User";
import { create, findAll, findOne, remove, update } from "../services/user";
interface CreateUserDto {

}
export const createUser: any = async (
  req: FastifyRequest,
  res: FastifyReply,
  next: DoneFuncWithErrOrRes
): Promise<FastifyReply> => {
  const body = req.body as CreateUserDto
  const user = await create({ ...body });
  return res
    .status(200)
    .send({ message: "User created successfully", data: user });
};

export const getUsers: any = async (
  req: FastifyRequest,
  res: FastifyReply,
  next: DoneFuncWithErrOrRes
): Promise<FastifyReply> => {

  const users = await findAll()
  return res
    .status(200)
    .send({ message: "Users fetched successfully", data: users });
};

export const getUser: any = async (
  req: FastifyRequest,
  res: FastifyReply,
  next: DoneFuncWithErrOrRes
): Promise<FastifyReply> => {
  const { id } = req.params as any;
  const user: User | null = await findOne(+id);
  return res
    .status(200)
    .send({ message: "User fetched successfully", data: user });
};

export const updateUser: any = async (
  req: FastifyRequest,
  res: FastifyReply,
  next: DoneFuncWithErrOrRes
): Promise<FastifyReply> => {
  const { id } = req.params as any;
  const user = await update(+id, { ...req.body as any });
  return res
    .status(200)
    .send({ message: "User updated successfully", data: user });
};

export const deleteUser: any = async (
  req: FastifyRequest,
  res: FastifyReply,
  next: DoneFuncWithErrOrRes
): Promise<FastifyReply> => {
  const { id } = req.params as any;
  const response = await remove(+id)
  return res
    .status(200)
    .send({ message: "User deleted successfully", data: response });
};
