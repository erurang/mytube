import express from 'express';
import { deleteVideo, getEditVideo, getUpload, postEditVideo, postUpload, videoDetail, videos } from '../controllers/videoControllers.js';
import { uploadVideo } from '../middleWare.js';
import routes from '../routes.js';

const videoRouter = express.Router();

// videos
videoRouter.get(routes.home,videos);

// videos/upload
videoRouter.get(routes.upload,getUpload);
videoRouter.post(routes.upload,uploadVideo,postUpload);

// videos/:id
videoRouter.get(routes.videoDetail(),videoDetail);

// videos/:id/edit
videoRouter.get(routes.editVideo(),getEditVideo);
videoRouter.post(routes.editVideo(),postEditVideo);

// videos/:id/delete
videoRouter.get(routes.deleteVideo(),deleteVideo);

export default videoRouter; 