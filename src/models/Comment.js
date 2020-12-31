import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "댓글",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: "이름",
  },
  avataUrl: {
    type: String,
    required: "아바타",
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

const model = mongoose.model("Comment", CommentSchema);

export default model;
