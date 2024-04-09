/* eslint-disable import-helpers/order-imports */
import { celebrate } from "celebrate";
import { Router } from "express";

// Criação do Usuário
import { CreateUserController } from "@modules/User/infra/http/Controllers/CreateUserController";
import { CreateUserValidator } from "@modules/User/infra/http/validators/CreateUser.validator";

// Leitura do Usuário
import { ReadUserController } from "../Controllers/ReadUserController";
import { ReadUserValidator } from "../validators/ReadUser.validator";

// Atualização do Usuário
import { UpdateUserController } from "../Controllers/UpdateUserController";
import { UpdateUserValidator } from "../validators/UpdateUser.validator";

export const UserRouter = Router();

const createUserController = new CreateUserController();
const readUserController = new ReadUserController();
const updateUserController = new UpdateUserController();

// POST
UserRouter.post("/create", celebrate(CreateUserValidator), createUserController.handle);

// GET
UserRouter.get("/read/:id", celebrate(ReadUserValidator), readUserController.handle);

// PATCH
UserRouter.patch("/update/:id", celebrate(UpdateUserValidator), updateUserController.handle);
