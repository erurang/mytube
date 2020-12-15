import express from "express";
import { middleWare } from "./middleWare.js";
import bodyParser from "body-parser";
import boardsRouters from "./routers/boardsRouters.js";
import homeRouter from "./routers/homeRouters.js";
import searchRouter from "./routers/searchRouters.js";
import videoRouter from "./routers/videoRouters.js";
import routes from "./routes.js"

const app = express()

app.set("view engine","pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(middleWare);

// 메인 / 검색창
app.use(routes.home,homeRouter);
app.use(routes.search,searchRouter);

// 게시판
app.use(routes.boards,boardsRouters);

// 비디오
app.use(routes.videos,videoRouter);

export default app;