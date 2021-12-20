import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, admin = false, password } = req.body;

    const creatUserService = new CreateUserService();

    const user = await creatUserService.execute({
      name,
      email,
      admin,
      password,
    });
    return res.json(user);
  }
}

export { CreateUserController };
