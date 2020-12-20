import express from "express";
import { me, userDetail } from "../controllers/userControllers.js";
import routes from "../routes.js";

const userRouter = express.Router();

userRouter.get(routes.me,me);

userRouter.get(routes.userDetail(),userDetail);

export default userRouter;
