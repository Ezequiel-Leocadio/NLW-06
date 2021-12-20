import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreatTagController";
import { ListComplimentController } from "./controllers/ListComplimentController";
import { ListTagController } from "./controllers/ListTagController";
import { ListUserController } from "./controllers/ListUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listComplimentController = new ListComplimentController();
const listTagComtroller = new ListTagController();
const listUserController = new ListUserController();

router.post("/login", authenticateUserController.handle);
router.post("/users", createUserController.handle);

router.use(ensureAuthenticated);
router.post("/tags", ensureAdmin, createTagController.handle);
router.get("/tags", listTagComtroller.handle);
router.post("/compliments", createComplimentController.handle);
router.get("/compliments/receive", listComplimentController.listReceive);
router.get("/compliments/send", listComplimentController.listSender);
router.get("/users", ensureAdmin, listUserController.handle);

export { router };
