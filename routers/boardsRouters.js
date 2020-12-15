import express from "express";
import routes from "../routes.js";
import { boards, getBoardsUpload, postBoardsUpload } from "../controllers/boardsControllers.js";

const boardsRouters = express.Router();

boardsRouters.get(routes.home,boards);

boardsRouters.get(routes.boardsUpload,getBoardsUpload);
boardsRouters.post(routes.boardsUpload,postBoardsUpload);

boardsRouters.get(routes.boardsDetail(),(req,res)=>res.render("hi"))

export default boardsRouters;