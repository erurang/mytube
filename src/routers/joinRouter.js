import express from "express";
import { getJoin, postJoin } from "../controllers/joinControllers.js";
import { postLogin } from "../controllers/loginControllers.js";
import { onlyPublic } from "../middleWare.js";
import routes from "../routes.js";

const joinRouter = express.Router();

joinRouter.get(routes.home, onlyPublic, getJoin);
joinRouter.post(routes.home, onlyPublic, postJoin, postLogin);

export default joinRouter;
