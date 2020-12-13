import Video from "../models/Video.js";

export const search = async (req, res) => {
  const {
    query: { search },
  } = req;

  let videos = [];

  try {
    videos = await Video.find({
      title: { $regex: search, $options: "i" },
    });
  } catch (error) {
    console.log(error);
  }
  res.render("search", { search, pageName: "검색", videos });
};
