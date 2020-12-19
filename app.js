import express from "express";
import { middleWare } from "./middleWare.js";
import bodyParser from "body-parser";
import boardsRouters from "./routers/boardsRouters.js";
import homeRouter from "./routers/homeRouters.js";
import searchRouter from "./routers/searchRouters.js";
import videoRouter from "./routers/videoRouters.js";
import routes from "./routes.js";
import joinRouter from "./routers/joinRouter.js";
import loginRouter from "./routers/loginRouter.js";

import passport from "passport";
import session from "express-session";
import cookieParser from "cookie-parser";

import "./passport.js"

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.set("view engine", "pug");

app.use("/videos/uploads", express.static("uploads"));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
  })
);
// cookieParser가 쿠키를 해석하고
// 이니셜라이즈가 쿠키를 들여다보고
app.use(passport.initialize());
app.use(passport.session());
// 그 쿠키에 맞는 정보를 req.user로 전달함. -> middleware에서 req.user로 이용함


app.use(middleWare);

// 메인
app.use(routes.home, homeRouter);

// 검색
app.use(routes.search, searchRouter);

// 가입
app.use(routes.join, joinRouter);

// 로그인/로그아웃
app.use(routes.login, loginRouter);

// 유저
// app.use(routes.users,)

// 게시판
app.use(routes.boards, boardsRouters);

// 비디오
app.use(routes.videos, videoRouter);

export default app;
