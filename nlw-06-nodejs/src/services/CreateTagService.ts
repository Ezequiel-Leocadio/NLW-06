import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositoties";

class CreateTagService {
  async execute(name: string) {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    if (!name) {
      throw new Error("Incorrect name");
    }

    const tagsAlreadyExists = await tagsRepositories.findOne({ name });

    if (tagsAlreadyExists) {
      throw new Error("Tag Already Exists!");
    }

    const tag = tagsRepositories.create({ name });

    await tagsRepositories.save(tag);
    return tag;
  }
}

export { CreateTagService };
