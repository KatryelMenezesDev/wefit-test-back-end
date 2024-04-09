import { celebrate } from "celebrate";
import { Router } from "express";

import { CreateUserController } from "@modules/User/infra/http/Controllers/CreateUserController";
import { CreateUserValidator } from "@modules/User/infra/http/validators/CreateUser.validator";

export const UserRouter = Router();

const createUserController = new CreateUserController();

UserRouter.post("/create", celebrate(CreateUserValidator), createUserController.handle);
