import Video from "../models/Video.js";
import User from "../models/User.js";
import routes from "../routes.js";

export const videos = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ createdAt: -1 });
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
    // user,
    user: { _id: id },
  } = req;

  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
    creator: id,
  });

  // let array = [];

  // user.videos.forEach((videos) => array.push(videos));
  // array.push(String(newVideo._id));

  // await User.findOneAndUpdate({ _id: id }, { videos: array });

  res.redirect(routes.videoDetail(newVideo._id));
};

export const videoDetail = async (req, res) => {
  // params 는 url에 있는 정보를 가져올수있다.
  // console.log(req.params);
  const {
    params: { id },
  } = req;

  try {
    const video = await Video.findById(id).populate("creator");
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
    if (String(video.creator) !== req.user._id) {
      throw Error();
    }
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
    const video = await Video.findOneAndUpdate(
      { _id: id },
      { title, description }
    );

    res.redirect(routes.videoDetail(video.id));
    // res.render(routes.videoDetail(video.id), {
    //   pageName: `${video.title}`,
    //   video,
    // });
  } catch (error) {
    console.log(error);
    res.redirect(routes.videos);
  }
};

export const deleteVideo = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const video = await Video.findById(id);
    if (String(video.creator) !== req.user._id) {
      throw Error();
    }
    await Video.findOneAndDelete({ _id: id });
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.videos);
};

export const registerView = async (req, res) => {
  const {
    params: { id },
  } = req;
  console.log(id)

  try {
    const video = await Video.findById(id);
    video.views += 1;
    video.save();
    res.status(200);
  } catch {
    res.status(400);
  } finally {
    res.end();
  }
};
