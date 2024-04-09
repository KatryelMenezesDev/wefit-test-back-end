import { Request as Req, Response as Res, NextFunction as Next } from "express";

import { UnauthorizedError as AuthError } from "./AppError";

const SECRET_KEY = process.env.SECRET_KEY || "8475bb04c8090afd7153aca3f0efa9a3";

export function Authentication(req: Req, res: Res, next: Next) {
  const token = req.headers.authorization;

  if (!token || token !== `Bearer ${SECRET_KEY}`) {
    throw new AuthError("Unauthorized");
  }

  next();
}
