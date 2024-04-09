import { Request as Req, Response as Res, NextFunction as Next } from "express";

import { UnauthorizedError as AuthError } from "./AppError";

const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key";

export function Authentication(req: Req, res: Res, next: Next) {
  const token = req.headers.authorization;

  if (!token || token !== `Bearer ${SECRET_KEY}`) {
    throw new AuthError("Unauthorized");
  }

  next();
}
