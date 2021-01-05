import Video from "../models/Video.js";
import routes from "../routes.js";
import Comment from "../models/Comment.js";

export const videos = async (req, res) => {
  try {
    const videos = await Video.find({}).populate("creator").sort({ like: -1 });
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
    file: { location },
    // file: { path },
    user: { _id: id },
  } = req;

  // multers3일때 console.log(req.user) 을 해보면
  // file.path가 아니라 file.location으로 아마존서버 주소를 경로로 바꿔줘야함

  const newVideo = await Video.create({
    fileUrl: location,
    // fileUrl : path,
    title,
    description,
    creator: id,
  });

  res.redirect(routes.videoDetail(newVideo._id));
};

export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const video = await Video.findById(id)
      .populate("creator")
      .populate("comments");
    const videoList = await Video.find({}).populate("creator");

    res.render("videoDetail", { pageName: video.title, video, videoList });
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
    const video = await Video.findById(id)
      .populate("creator")
      .populate("comments");

    const videoList = await Video.find({}).populate("creator");
    if (String(video.creator._id) !== req.user._id) {
      throw Error();
    }
    res.render("editVideo", { pageName: video.title, video, videoList });
  } catch (error) {
    res.redirect(routes.videos);
  }
};

export const postEditVideo = async (req, res) => {
  let {
    params: { id },
    body: { title, description },
  } = req;

  const video = await Video.findById(id);

  if (title == null) {
    title = video.title;
  }
  if (description == null) {
    description = video.description;
  }

  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description });

    res.redirect(routes.videoDetail(video.id));
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

export const registerView = async (req, res, next) => {
  const {
    params: { id },
  } = req;

  const video = await Video.findById(id);
  video.views += 1;
  video.save();

  next();
};

export const postAddComment = async (req, res) => {
  const {
    params: { id },
    body: { comment },
  } = req;

  try {
    const video = await Video.findById(id);
    const newComment = await Comment.create({
      text: comment,
      creator: req.user._id,
      name: req.user.name,
      avataUrl: req.user.avataUrl,
    });

    video.comments.push(newComment._id);
    video.save();
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};

export const editComment = async (req, res) => {
  console.log(req);
};
export const deleteComment = async (req, res) => {
  const {
    body: { value },
  } = req;

  try {
    await Comment.findOneAndDelete({ _id: value });
  } catch (error) {
    console.log(error);
    res.status(400);
  } finally {
    res.end();
  }
};

export const likeUp = async (req, res) => {
  const {
    body: { videoId },
  } = req;

  try {
    const video = await Video.findById(videoId);
    video.like += 1;
    video.save();
  } catch (error) {
    console.log(error);
    res.status(400);
  } finally {
    res.end();
  }
};

export const unlikeDown = async (req, res) => {
  const {
    body: { videoId },
  } = req;

  try {
    const video = await Video.findById(videoId);
    video.unlike += 1;
    video.save();
  } catch (error) {
    console.log(error);
    res.status(400);
  } finally {
    res.end();
  }
};

// 비디오댓글
export const commentLikeUp = async (req, res) => {
  const {
    body: { value },
  } = req;

  try {
    const comment = await Comment.findById(value);
    comment.like += 1;
    comment.save();
  } catch (error) {
    console.log(error);
    res.status(400);
  } finally {
    res.end();
  }
};

export const commentunLikeDown = async (req, res) => {
  const {
    body: { value },
  } = req;

  try {
    const comment = await Comment.findById(value);
    comment.unlike += 1;
    comment.save();
  } catch (error) {
    console.log(error);
    res.status(400);
  } finally {
    res.end();
  }
};
