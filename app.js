import express from "express";
import { middleWare } from "./middleWare.js";


// router
import routes from "./routes.js";
import homeRouter from "./routers/homeRouters.js";
import joinRouter from "./routers/joinRouter.js";
import loginRouter from "./routers/loginRouter.js";
import searchRouter from "./routers/searchRouters.js";
import videoRouter from "./routers/videoRouters.js";
import boardsRouters from "./routers/boardsRouters.js";
import userRouter from "./routers/userRouters.js";
import apiRouter from "./routers/apiRouter.js";

// mongo
import MongoStore from "connect-mongo";
import mongoose from "mongoose";

// 
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";

// auth
import "./passport.js";
import passport from "passport";

// process
import dotenv from "dotenv";
dotenv.config();


const app = express();

const CookieStore = MongoStore(session);

// 템플릿을 pug로 설정
app.set("view engine", "pug");

// localhost로 작업할때 // 외부 클라우드일땐 필요없음.
app.use("/uploads", express.static("uploads"))
app.use("/users",express.static("uploads"));
app.use("/videos/uploads", express.static("uploads"));

// 정적파일들 보관 (js.css)
app.use("/static",express.static("static"))


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 세션관리
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection }),
  })
);

// cookieParser가 쿠키를 해석하고
// 이니셜라이즈가 쿠키를 들여다보고
app.use(passport.initialize());
app.use(passport.session());
// 그 쿠키에 맞는 정보를 req.user로 전달함. -> middleware에서 req.user로 이용함

app.use(middleWare);

// Router 관리
app.use(routes.home, homeRouter);
app.use(routes.search, searchRouter);
app.use(routes.join, joinRouter);
app.use(routes.login, loginRouter);
app.use(routes.users,userRouter);
app.use(routes.boards, boardsRouters);
app.use(routes.videos, videoRouter);
app.use(routes.api,apiRouter);

export default app;
