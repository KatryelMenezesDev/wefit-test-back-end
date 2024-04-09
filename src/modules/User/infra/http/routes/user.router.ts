/* eslint-disable import-helpers/order-imports */
import { celebrate } from "celebrate";
import { Router } from "express";
import { Authentication } from "@utils/Authentication";

// Criação do Usuário
import { CreateUserController } from "@modules/User/infra/http/Controllers/CreateUserController";
import { CreateUserValidator } from "@modules/User/infra/http/validators/CreateUser.validator";

// Leitura do Usuário
import { ReadUserController } from "../Controllers/ReadUserController";
import { ReadUserValidator } from "../validators/ReadUser.validator";

// Atualização do Usuário
import { UpdateUserController } from "../Controllers/UpdateUserController";
import { UpdateUserValidator } from "../validators/UpdateUser.validator";

// Deleção do Usuário
import { DeleteUserController } from "../Controllers/DeleteUserController";
import { DeleteUserValidator } from "../validators/DeleteUser.validator";

export const UserRouter = Router();

const createUserController = new CreateUserController();
const readUserController = new ReadUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

// POST
UserRouter.post("/create", Authentication, celebrate(CreateUserValidator), createUserController.handle);

// GET
UserRouter.get("/read/:id", Authentication, celebrate(ReadUserValidator), readUserController.handle);

// PATCH
UserRouter.patch("/update/:id", Authentication, celebrate(UpdateUserValidator), updateUserController.handle);

// DELETE
UserRouter.delete("/delete/:id", Authentication, celebrate(DeleteUserValidator), deleteUserController.handle);
