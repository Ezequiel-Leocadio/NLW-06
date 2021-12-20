import { Request, Response } from "express";
import { ListTagService } from "../services/ListTagService";

class ListTagController {
  async handle(req: Request, res: Response) {
    const listService = new ListTagService();

    const tags = await listService.execute();

    return res.json(tags);
  }
}

export { ListTagController };
