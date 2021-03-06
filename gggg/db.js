import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

// 데이터가 존재하는 url을 적어줌
const url = process.env.MONGO_URL_PROD || process.env.MONGO_URL;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// db라는 변수에 몽구스를 연결함
const db = mongoose.connection;

const handleOpen = () => console.log("MongoDB connected");
const handleError = (error) => console.log(`Error on DB : ${error}`);

db.once("open", handleOpen);
db.on("Error", handleError);
