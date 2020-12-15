import mongoose from "mongoose";

const BoardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "제목을 적어주세요",
  },
  description:{
      type:String,
      required:"내용"
  },
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model("Board", BoardSchema);

export default model;
