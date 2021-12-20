import { Request, Response, NextFunction } from "express";

export function ensureAdmin(req: Request, res: Response, next: NextFunction) {
  //Verificar se usuario é Admin
  const {admin} = req.user

  if (admin) {
    return next();
  }

  return res.status(401).json({
    error: "User is Not Admin",
  });
}
