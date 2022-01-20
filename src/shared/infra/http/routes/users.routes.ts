import express from "express";
import { CreateUserController } from "../../../../modules/users/controllers/CreateUserController";

const userRoutes = express();

const createUserController = new CreateUserController;

userRoutes.post("/", createUserController.handle);

export { userRoutes };