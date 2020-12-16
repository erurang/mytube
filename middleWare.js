import routes from "./routes.js";

import multer from "multer";

const multerVideo = multer({ dest: "uploads/videos/" });

export const middleWare = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.siteName = "Mytube";

  next();
};

export const uploadVideo = multerVideo.single("videoFile");