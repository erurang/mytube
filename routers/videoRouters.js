import express from 'express';
import { deleteVideo, getEditVideo, getUpload, postEditVideo, postUpload, videoDetail, videos } from '../controllers/videoControllers.js';
import { onlyLogin, uploadVideo } from '../middleWare.js';
import routes from '../routes.js';

const videoRouter = express.Router();

// videos
videoRouter.get(routes.home,videos);

// videos/upload
videoRouter.get(routes.upload,onlyLogin,getUpload);
videoRouter.post(routes.upload,onlyLogin,uploadVideo,postUpload);

// videos/:id
videoRouter.get(routes.videoDetail(),videoDetail);

// videos/:id/edit
videoRouter.get(routes.editVideo(),onlyLogin,getEditVideo);
videoRouter.post(routes.editVideo(),onlyLogin,postEditVideo);

// videos/:id/delete
videoRouter.get(routes.deleteVideo(),onlyLogin,deleteVideo);

export default videoRouter; 