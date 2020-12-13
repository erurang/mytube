import app from "./app.js";

import "./db.js";
import "./models/Video.js";
import "./models/Comment.js"

import dotenv from "dotenv";
dotenv.config()

app.listen(process.env.PORT,()=>console.log(`Listening on http://localhost:${process.env.PORT}`))