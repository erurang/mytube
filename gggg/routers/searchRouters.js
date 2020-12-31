import express from "express";
import { search } from "../controllers/searchControllers.js";
import routes from "../routes.js";

const searchRouter = express.Router();

searchRouter.get(routes.home, search);

export default searchRouter;
