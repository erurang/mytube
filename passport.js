import dotenv from "dotenv";
dotenv.config();

import passport from "passport";
import GithubStrategy from "passport-github";
import NaverStrategy from "passport-naver";
// import FacebookStrategy from "passport-facebook";
import KakaoStrategy from "passport-kakao";

import {
  // facebookLoginCallback,
  githubLoginCallback,
  kakaoLoginCallback,
  naverLoginCallback,
} from "./controllers/loginControllers.js";
import User from "./models/User.js";
import routes from "./routes.js";

// npm i passport passport-local
// npm i passport passport-"kakao,, facebook.." 사용자 인증방식임

// strategy는 로그인하는 방식을 뜻함.
passport.use(User.createStrategy());

passport.use(
  new NaverStrategy(
    {
      clientID: process.env.NAVER_ID,
      clientSecret: process.env.NAVER_SECRET,
      callbackURL: `https://aqueous-atoll-59353.herokuapp.com${routes.naverCallback}`,
      // callbackURL: `http://localhost:4000${routes.naverCallback}`,
    },
    naverLoginCallback
  )
);
passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `https://aqueous-atoll-59353.herokuapp.com${routes.githubCallback}`,
      // callbackURL: `http://localhost:4000${routes.githubCallback}`,
    },
    githubLoginCallback
  )
);

// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: process.env.FB_ID,
//       clientSecret: process.env.FB_SECRET,
//       callbackURL: `http://localhost:4000${routes.facebookCallback}`,
//     },
//     facebookLoginCallback
//   )
// );

passport.use(
  new KakaoStrategy.Strategy(
    {
      clientID: process.env.KAKAO_ID,
      clientSecret: process.env.KAKAO_SECRET,
      callbackURL: `https://aqueous-atoll-59353.herokuapp.com${routes.kakaoCallback}`,
      // callbackURL: `http://localhost:4000${routes.kakaoCallback}`,
    },
    kakaoLoginCallback
  )
);

// user모델의 어떤 Field가 쿠키포함될것인지 정해 (쿠키를 줌)
// user id가 기본 default임
passport.serializeUser(function (user, done) {
  done(null, user);
});

// 어느 사용자인지 어떻게 찾을래? (쿠키의 정보를 해석)
passport.deserializeUser(function (user, done) {
  done(null, user);
});
