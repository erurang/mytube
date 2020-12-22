import Board from "../models/Boards.js";
import routes from "../routes.js";
import User from "../models/User.js";

export const boards = async (req, res) => {
  try {
    const list = await Board.find({}).sort({ createdAt: -1 });
    res.render("boards", { pageName: "게시판", list });
  } catch (error) {
    console.log(error);
    res.render("boards", { pageName: "게시판", list: [] });
  }
};

export const getBoardsUpload = (req, res) => {
  res.render("boardsUpload", { pageName: "글쓰기", Board });
};

export const postBoardsUpload = async (req, res) => {
  const {
    body: { title, description },
    user,
  } = req;

  // let array = [];

  const newBoards = await Board.create({
    title,
    description,
    creator: user._id,
  });

  // user.boards.forEach((boards) => array.push(boards));
  // array.push(String(newBoards._id));

  // await User.findOneAndUpdate({ _id: user._id }, { board: array });

  res.redirect(routes.boardsDetail(newBoards._id));
};

export const boardDetail = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const boards = await Board.findById(id).populate("creator");

    res.render("boardsDetail", {
      pageName: "게시판",
      id,
      title: boards.title,
      description: boards.description ? boards.description : [],
      views: boards.views,
      createdAt: boards.createdAt,
      creator: boards.creator,
    });
  } catch (error) {}
};

export const getBoardsEdit = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const board = await Board.findById(id);
    if (String(board.creator) !== req.user._id) {
      throw Error();
    } else {
      res.render("boardsEdit", { pageName: "수정하기", id, board });
    }
  } catch (error) {
    console.log(error);
  }
};

export const postBoardsEdit = async (req, res) => {
  const {
    body: { title, description },
    params: { id },
  } = req;
  // console.log(params)
  // console.log(req.body)
  try {
    const boards = await Board.findOneAndUpdate(
      { _id: id },
      { title, description }
    );

    res.redirect(routes.boardsDetail(id));
    // res.render(routes.boardsDetail(id), {
    //   pageName: title,
    //   id,
    //   title: boards.title,
    //   description: boards.description ? boards.description : [],
    // });
  } catch (error) {
    console.log(error);
    res.redirect(routes.boards);
  }
};

export const boardsDelete = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const board = await Board.findById(id);
    if (String(board.creator) !== req.user._id) {
      throw Error();
    }
    await Board.findOneAndRemove({ _id: id });
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.boards);
};
