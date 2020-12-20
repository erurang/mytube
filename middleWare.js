import routes from "./routes.js";

import multer from "multer";

const multerVideo = multer({ dest: "uploads/videos/" });

export const middleWare = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.siteName = "Mytube";
  res.locals.loggedUser = req.user;

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
