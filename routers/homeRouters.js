import express from "express";
import { home } from "../controllers/homeControllers.js";
import routes from "../routes.js";

const homeRouter = express.Router();

homeRouter.get(routes.home,home);

export default homeRouter;