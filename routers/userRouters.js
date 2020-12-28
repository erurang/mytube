import express from "express";
import {
  getEditProfile,
  me,
  myPost,
  postEditProfile,
  userDetail,
  yourPost,
} from "../controllers/userControllers.js";
import { uploadPicture } from "../middleWare.js";
import routes from "../routes.js";

const userRouter = express.Router();

userRouter.get(routes.me, me);

userRouter.get(routes.userDetail(), userDetail);

userRouter.get(routes.editProfile(), getEditProfile);
userRouter.post(routes.editProfile(), uploadPicture, postEditProfile);

userRouter.get(routes.myPost(), myPost);
userRouter.get(routes.yourPost(), yourPost);

export default userRouter;
