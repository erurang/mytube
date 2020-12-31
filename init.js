import "@babel/polyfill"
import app from "./app.js";

import "./db.js";
import "./models/Video.js";
import "./models/Comment.js";
import "./models/Boards.js";
import "./models/User.js";

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000
app.listen(process.env.PORT, () =>
  console.log(`Listening on http://localhost:${PORT}`)
);
