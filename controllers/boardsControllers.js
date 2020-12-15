import Board from "../models/Boards.js";
import routes from "../routes.js";

export const boards = async (req, res) => {
  try {
    const list = await Board.find({});
    console.log(list)
    res.render("boards", { pageName: "게시판", list });
  } catch (error) {
    console.log(error);
    res.render("boards", { pageName: "게시판", list: [] });
  }
};

export const getBoardsUpload = (req, res) => {
  res.render("boardsUpload", { pageName: "글쓰기" ,Board});
};

export const postBoardsUpload = async (req, res) => {
  const {
    body: { title, description },
  } = req;

  const newBoards = await Board.create({
    title,
    description,
  });
  console.log(newBoards);
  res.redirect(routes.boards);
  // res.redirect(routes.videoDetail(newVideo.id));
};
