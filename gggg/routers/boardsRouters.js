import express from "express";
import routes from "../routes.js";
import {
  boardDetail,
  boards,
  boardsDelete,
  boardViews,
  getBoardsEdit,
  getBoardsUpload,
  postBoardsEdit,
  postBoardsUpload,
  boardshot,
} from "../controllers/boardsControllers.js";
import { onlyLogin } from "../middleWare.js";

const boardsRouters = express.Router();

boardsRouters.get(routes.home, boards);
boardsRouters.get(routes.boardhot, boardshot);

boardsRouters.get(routes.boardsUpload, onlyLogin, getBoardsUpload);
boardsRouters.post(routes.boardsUpload, onlyLogin, postBoardsUpload);

boardsRouters.get(routes.boardsDetail(), boardViews, boardDetail);

boardsRouters.get(routes.boardsEdit(), onlyLogin, getBoardsEdit);
boardsRouters.post(routes.boardsEdit(), onlyLogin, postBoardsEdit);

boardsRouters.get(routes.boardsDelete(), onlyLogin, boardsDelete);
export default boardsRouters;
