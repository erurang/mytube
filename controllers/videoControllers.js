import Video from "../models/Video.js";
import routes from "../routes.js";

export const videos = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({createdAt : -1});
    res.render("videos", { pageName: "영상", videos });
  } catch (error) {
    console.log(error);
    res.render("videos", { pageName: "영상", videos: [] });
  }
};

export const getUpload = (req, res) => {
  res.render("upload", { pageName: "업로드" });
};

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });
  console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  // params 는 url에 있는 정보를 가져올수있다.
  // console.log(req.params);
  const {
    params: { id },
  } = req;

  try {
    const video = await Video.findById(id);
    res.render("videoDetail", { pageName: video.title, video });
  } catch (error) {
    console.log(error);
    res.redirect(routes.videos);
  }
};

export const getEditVideo = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const video = await Video.findById(id);
    res.render("editVideo", { pageName: video.title, video });
  } catch (error) {
    res.redirect(routes.videos);
  }
};

export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;

  try {
    const video = await Video.findOneAndUpdate({ _id: id }, { title, description });
    
    res.redirect(routes.videoDetail(video.id))
    // res.render(routes.videoDetail(video.id), {
    //   pageName: `${video.title}`,
    //   video,
    // });
  } catch (error) {
    console.log(error)
    res.redirect(routes.videos);
  }
};

export const deleteVideo = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    await Video.findOneAndDelete({ _id: id });
  } catch (error) {
    console.log(error);
  }

  res.redirect(routes.videos);
};
