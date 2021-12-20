import { Request, Response } from "express";
import { ListuserService } from "../services/ListUserService";

class ListUserController {
  async handle(req: Request, res: Response) {
    const userService = new ListuserService();

    const users = await userService.execute();

    return res.json(users);
  }
}

export { ListUserController };
