import express from "express"
import { BCommentAdd, BCommentDelete, boardViews } from "../controllers/boardsControllers.js"
import { deleteComment, postAddComment, registerView } from "../controllers/videoControllers.js"

import routes from "../routes.js"

const apiRouter = express.Router();

// video post delete
apiRouter.post(routes.addcomment,postAddComment)
apiRouter.post(routes.deleteComment,deleteComment)

// board post delete
apiRouter.post(routes.bcommentAddComment,BCommentAdd)
apiRouter.post(routes.bcommentDelete,BCommentDelete)


// 조회수
apiRouter.post(routes.registerView,registerView);
apiRouter.post(routes.registerView,boardViews);



export default apiRouter;