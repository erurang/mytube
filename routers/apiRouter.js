import express from "express";
import {
  BCommentAdd,
  BCommentDelete,
  boardLikeDown,
  boardLikeUp,
  boardViews,
} from "../controllers/boardsControllers.js";
import {
  commentLikeUp,
  commentunLikeDown,
  deleteComment,
  likeUp,
  postAddComment,
  registerView,
  unlikeDown,
} from "../controllers/videoControllers.js";
import { onlyLogin } from "../middleWare.js";

import routes from "../routes.js";

const apiRouter = express.Router();

// video post delete
apiRouter.post(routes.addcomment, onlyLogin, postAddComment);
apiRouter.post(routes.deleteComment, deleteComment);

// board post delete
apiRouter.post(routes.bcommentAddComment, onlyLogin, BCommentAdd);
apiRouter.post(routes.bcommentDelete, BCommentDelete);

// 조회수
apiRouter.post(routes.registerView, registerView);
apiRouter.post(routes.registerView, boardViews);

// 비디오 좋아요

apiRouter.post(routes.like, likeUp);
apiRouter.post(routes.unlike, unlikeDown);

apiRouter.post(routes.commentlike, commentLikeUp);
apiRouter.post(routes.commentunlike, commentunLikeDown);

// 게시글 좋아요

apiRouter.post(routes.boardlike, boardLikeUp);
apiRouter.post(routes.boardunlike, boardLikeDown);

export default apiRouter;
