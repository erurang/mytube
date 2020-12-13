import express from 'express';
import { editVideo, upload, videoDetail, videos } from '../controllers/videoControllers.js';
import routes from '../routes.js';

const videoRouter = express.Router();

// videos
videoRouter.get(routes.home,videos);

// videos/upload
videoRouter.get(routes.upload,upload);
videoRouter.post(routes.upload,upload);

// videos/:id
videoRouter.get(routes.videoDetail,videoDetail);

// videos/:id/edit
videoRouter.get(routes.editVideo,editVideo);
videoRouter.post(routes.editVideo,editVideo);

export default videoRouter;