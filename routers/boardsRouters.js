import express from "express";
import routes from "../routes.js";
import {
  boardDetail,
  boards,
  boardsDelete,
  getBoardsEdit,
  getBoardsUpload,
  postBoardsEdit,
  postBoardsUpload,
} from "../controllers/boardsControllers.js";

const boardsRouters = express.Router();

boardsRouters.get(routes.home, boards);

boardsRouters.get(routes.boardsUpload, getBoardsUpload);
boardsRouters.post(routes.boardsUpload, postBoardsUpload);

boardsRouters.get(routes.boardsDetail(), boardDetail);

boardsRouters.get(routes.boardsEdit(), getBoardsEdit);
boardsRouters.post(routes.boardsEdit(), postBoardsEdit);

boardsRouters.get(routes.boardsDelete(), boardsDelete);
export default boardsRouters;
