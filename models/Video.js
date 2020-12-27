import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "파일 경로가 필요합니다.",
  },
  // posterUrl:{
  //   type:String,
  //   required: "파일경로가필요합니다",
  // },
  title: {
    type: String,
    required: "제목이 필요합니다.",
  },
  description: {
    type: String,
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
  like : {
    type: Number,
    default: 0,
  },
  unlike : {
    type: Number,
    default: 0,
  }
});

const model = mongoose.model("Video", VideoSchema);

export default model;
