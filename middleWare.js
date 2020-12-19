import routes from "./routes.js";

import multer from "multer";

const multerVideo = multer({ dest: "uploads/videos/" });

export const middleWare = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.siteName = "Mytube";
  res.locals.user = req.user;
  console.log(req.user)
  next();
};

export const onlyPublic = (req,res,next) => {
  if (req.user){
    res.redirect(routes.home)
  }else{
    next();
  }
}

export const uploadVideo = multerVideo.single("videoFile");
