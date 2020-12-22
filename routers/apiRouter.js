import express from "express"
import { registerView } from "../controllers/videoControllers.js"
import routes from "../routes.js"

const apiRouter = express.Router()

apiRouter.get(routes.registerView,registerView)

export default apiRouter