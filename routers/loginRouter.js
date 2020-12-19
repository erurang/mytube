import express from "express";
import { getLogin, postLogin } from "../controllers/loginControllers.js";
import routes from "../routes.js"


const loginRouter = express.Router();

loginRouter.get(routes.home,getLogin);
loginRouter.post(routes.home,postLogin);

export default loginRouter;