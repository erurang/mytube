import express from "express";
import routes from "../routes.js";
import { boards } from "../controllers/boardsControllers.js";

const boardsRouters = express.Router();

boardsRouters.get(routes.home,boards);

export default boardsRouters;