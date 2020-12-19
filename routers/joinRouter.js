import express from "express";
import { getJoin, postJoin } from "../controllers/joinControllers.js";
import { postLogin } from "../controllers/loginControllers.js";
import routes from "../routes.js";

const joinRouter = express.Router();

joinRouter.get(routes.home,getJoin);
joinRouter.post(routes.home,postJoin,postLogin);  

export default joinRouter;