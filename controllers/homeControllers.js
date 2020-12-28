import Video from "../models/Video.js";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({})
      .populate("creator")
      .sort({ createdAt: -1 });
    res.render("home", { pageName: "영상", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageName: "영상", videos: [] });
  }
};

export const about = async (req, res) => {
  res.render("about", { pageName: "개발자정보" });
};
