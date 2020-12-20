import express from "express";
import { getLogin, logout, postLogin } from "../controllers/loginControllers.js";
import { onlyPublic } from "../middleWare.js";
import routes from "../routes.js"


const loginRouter = express.Router();

loginRouter.get(routes.home,onlyPublic,getLogin);
loginRouter.post(routes.home,onlyPublic,postLogin);

loginRouter.get(routes.logout,logout);

export default loginRouter;