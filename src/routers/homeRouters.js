import express from "express";
import { about, home } from "../controllers/homeControllers.js";
import {
  facebookLogin,
  githubLogin,
  kakaoLogin,
  naverLogin,
  postFacebookLogin,
  postGithubLogin,
  postKakaoLogin,
  postNaverLogin,
} from "../controllers/loginControllers.js";
import routes from "../routes.js";
import passport from "passport";

const homeRouter = express.Router();

homeRouter.get(routes.about, about);
homeRouter.get(routes.home, home);

homeRouter.get(routes.github, githubLogin);

homeRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: routes.login }),
  postGithubLogin
);

homeRouter.get(routes.facebook, facebookLogin);

homeRouter.get(
  routes.facebookCallback,
  passport.authenticate("facebook", { failureRedirect: routes.login }),
  postFacebookLogin
);

homeRouter.get(routes.kakao, kakaoLogin);

homeRouter.get(
  routes.kakaoCallback,
  passport.authenticate("kakao", { failureRedirect: routes.login }),
  postKakaoLogin
);

homeRouter.get(routes.naver, naverLogin);

homeRouter.get(
  routes.naverCallback,
  passport.authenticate("naver", { failureRedirect: routes.login }),
  postNaverLogin
);
export default homeRouter;
