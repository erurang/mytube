import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

// passportlocalmongoose는 우리 모델 스키마에
// user & password 필드를 추가해준다.

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avataUrl: String,
  facebookId: Number,
  kakaoId: Number,
  githubId: Number,
  naverId: Number,
  boards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Board",
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  videos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
});

// 유저스키마에 플러그인을 쓸건데 ( 플러그인 , 유저네임이 될 필드명엔 : )
UserSchema.plugin(passportLocalMongoose, { usernameField: "email"},);

const model = mongoose.model("User", UserSchema);

export default model;
