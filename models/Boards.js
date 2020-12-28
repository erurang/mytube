import mongoose from "mongoose";

const BoardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "제목을 적어주세요",
  },
  description: {
    type: String,
    required: "내용",
  },
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  like: {
    type: Number,
    default: 0,
  },
  unlike: {
    type: Number,
    default: 0,
  },
});

const model = mongoose.model("Board", BoardSchema);

export default model;
