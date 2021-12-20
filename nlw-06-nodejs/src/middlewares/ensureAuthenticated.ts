import { Request, Response, NextFunction, response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
    sub:string;
    admin:boolean
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }
  const [, token] = authToken.split(" ");
  try {
    const {sub,admin} = verify(token, "072b7fd29e6704b21637bd2b15514f6a") as IPayload;
    req.user = {id:sub,admin}
    return next();
  } catch (err) {
    return res.status(401).end;
  }
}
