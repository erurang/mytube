import express from "express";
import routes from "../routes.js";

const userRouter = express.Router();

userRouter.get(routes.home);

export default userRouter;
