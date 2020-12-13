import Video from "../models/Video.js";
import routes from "../routes.js";

export const videos = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("videos", { pageName: "영상", videos });
  } catch (error) {
    console.log(error);
    res.render("videos", { pageName: "영상", videos: [] });
  }
};

export const getUpload = (req, res) => {
  res.render("upload", { pageName: "업로드" });
};

export const postUpload = async (req,res) => {
    const {
        body: {
            title,description
        },
        file: {path},
    } = req;
    
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id))
}

export const videoDetail = (req, res) => {

  res.render("videoDetail", { pageName: "비디오 상세" });
};

export const editVideo = (req, res) => {
  res.render("editVideo", { pageName: "수정"});
};
