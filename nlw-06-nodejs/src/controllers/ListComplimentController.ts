import { Request, Response } from "express";
import { ListComplimentService } from "../services/ListComplimentService";

class ListComplimentController {
  async listReceive(req: Request, res: Response) {
    const { id } = req.user;
    const list = new ListComplimentService();

    const compliments =  await list.listReceive(id);

    return res.json(compliments);
  }

  async listSender(req: Request, res: Response) {
    const { id } = req.user;
    const list = new ListComplimentService();

    const compliments = await list.listSender(id);

    return res.json(compliments);
  }
}

export { ListComplimentController };
