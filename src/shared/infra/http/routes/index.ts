import { Router } from "express";

import { UserRouter } from "@modules/User/infra/http/routes/user.router";

export const router = Router();

router.use("/user", UserRouter);
