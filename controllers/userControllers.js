import User from "../models/User.js";
import Video from "../models/Video.js";
import Board from "../models/Boards.js";
import routes from "../routes.js";

export const users = (req, res) => {
  res.render("users", { pageName: "유저" });
};

export const me = async (req, res) => {
  const {
    user: { _id },
  } = req;

  const user = await User.findById(_id);
  res.render("profile", { pageName: "프로필", _id, user });
};

export const userDetail = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const user = await User.findById(id);

    res.render("userDetail", { pageName: "유저상세", user, id });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getEditProfile = async (req, res) => {
  const {
    user: { _id },
  } = req;
  const user = await User.findById(_id);

  res.render("editProfile", { pageName: "프로필 수정", user });
};

export const postEditProfile = async (req, res) => {
  const {
    body: { name },

    // file : {path}
    file: { location },
    user: { _id },
  } = req;

  req.user.avataUrl = location;
  req.user.name = name;

  await User.findOneAndUpdate({ _id }, { avataUrl: location });
  await User.findOneAndUpdate({ _id }, { name });

  res.redirect(`/users${routes.me}`);
};

export const myPost = async (req, res) => {
  const {
    user: { _id },
  } = req;

  const videos = await Video.find({ creator: _id }).populate("creator");
  const boards = await Board.find({ creator: _id }).populate("creator");

  res.render("myPost", { pageName: "내글보기", videos, boards });
};

export const yourPost = async (req, res) => {
  const {
    params: { id },
  } = req;

  const videos = await Video.find({ creator: id }).populate("creator");
  const boards = await Board.find({ creator: id }).populate("creator");
  const users = await User.findById(id);

  res.render("yourPost", { pageName: "작성글보기", videos, boards, users });
};
