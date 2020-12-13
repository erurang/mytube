import express from 'express';
import { editVideo, getUpload, postUpload, videoDetail, videos } from '../controllers/videoControllers.js';
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
videoRouter.get(routes.editVideo(),editVideo);
videoRouter.post(routes.editVideo(),editVideo);

// videos/:id/delete
videoRouter.get(routes.deleteVideo(),(req,res)=>res.send("delete video"));

export default videoRouter; 