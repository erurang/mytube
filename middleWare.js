import routes from "./routes.js";
import multer from "multer";


import dotenv from "dotenv"
import multerS3 from "multer-s3";
import aws from "aws-sdk";
dotenv.config()

const s3 = new aws.S3({
  secretAccessKey:process.env.AWS_PRIVATE_KEY,
  accessKeyId:process.env.AWS_KEY,
})

// 아마존 s3서버에 파일을 올리는 것을 multer가 해줌
// const multerVideo = multer({ dest: "uploads/videos/" });
const multerVideo = multer ({
  storage: multerS3({
    s3,
    acl: 'public-read',
    bucket: "mytubeclone/video"
  })
})

// const multerPicture = multer({ dest: "uploads/avata/" });
const multerPicture = multer ({
  storage:multerS3({
    s3,
    acl: 'public-read',
    bucket: "mytubeclone/avatar"
  })
})



export const middleWare = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.siteName = "Mytube";
  res.locals.loggedUser = req.user || ""

  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyLogin = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.login);
  }
};

export const uploadVideo = multerVideo.single("videoFile");
export const uploadPicture = multerPicture.single("avataFile");

