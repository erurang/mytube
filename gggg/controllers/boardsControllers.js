import Board from "../models/Boards.js";
import routes from "../routes.js";
import Comment from "../models/Comment.js";
import User from "../models/User.js";

export const boards = async (req, res) => {
  try {
    const list = await Board.find({})
      .populate("creator")
      .sort({ createdAt: -1 });

    res.render("boards", { pageName: "게시판", list });
  } catch (error) {
    console.log(error);
    res.render("boards", { pageName: "게시판", list: [] });
  }
};

export const boardshot = async (req, res) => {
  try {
    const list = await Board.find({}).populate("creator").sort({ like: -1 });

    res.render("boardshot", { pageName: "게시판", list });
  } catch (error) {
    console.log(error);
    res.render("boardshot", { pageName: "게시판", list: [] });
  }
};

export const getBoardsUpload = (req, res) => {
  res.render("boardsUpload", { pageName: "글쓰기", Board });
};

export const postBoardsUpload = async (req, res) => {
  const {
    body: { title, description },
  } = req;

  const newBoards = await Board.create({
    title,
    description,
    creator: req.user._id,
  });

  // const user = await User.findById(req.user._id)
  // user.boards.push(newBoards._id)
  // user.save();

  res.redirect(routes.boardsDetail(newBoards._id));
};

export const boardDetail = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const boards = await Board.findById(id)
      .populate("creator")
      .populate("comments");

    const date = boards.createdAt;

    function getFormatDate(date) {
      let year = date.getFullYear();
      let month = 1 + date.getMonth();
      month = month >= 10 ? month : "0" + month;
      let day = date.getDate();
      day = day >= 10 ? day : "0" + day;

      return year + "-" + month + "-" + day;
    }

    res.render("boardsDetail", {
      pageName: "게시판",
      id,
      boards,
      date: getFormatDate(date),
      comments: boards.comments.length ? boards.comments.length : 0,
      text: boards.comments,
    });
  } catch (error) {}
};

export const getBoardsEdit = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const boards = await Board.findById(id)
      .populate("creator")
      .populate("comments");

    if (String(boards.creator._id) !== req.user._id) {
      throw Error();
    }

    res.render("boardsEdit", { pageName: "수정하기", id, boards });
  } catch (error) {
    console.log(error);
  }
};

export const postBoardsEdit = async (req, res) => {
  let {
    body: { title, description },
    params: { id },
  } = req;

  const board = await Board.findById(id);
  if (title == null) {
    title = board.title;
  }
  if (description == null) {
    description = board.description;
  }

  try {
    await Board.findOneAndUpdate({ _id: id }, { title, description });

    res.redirect(routes.boardsDetail(id));
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

export const boardViews = async (req, res, next) => {
  const {
    params: { id },
  } = req;

  const boards = await Board.findById(id);
  boards.views += 1;
  boards.save();
  next();
};

// 게시판 댓글생성

export const BCommentAdd = async (req, res) => {
  const {
    params: { id },
    body: { comment },
  } = req;

  try {
    const board = await Board.findById(id);

    const newComment = await Comment.create({
      text: comment,
      creator: req.user._id,
      name: req.user.name,
      avataUrl: req.user.avataUrl,
    });

    board.comments.push(newComment._id);
    board.save();
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};

export const BCommentDelete = async (req, res) => {
  const {
    body: { value },
  } = req;

  try {
    const comment = await Comment.findByIdAndDelete({ _id: value });
    comment.save();
  } catch (error) {
    res.status(400);
  } finally {
    res.status(200);
  }
};

// 게시글 좋아요
export const boardLikeUp = async (req, res) => {
  const {
    body: { boardId },
  } = req;

  try {
    const board = await Board.findById(boardId);
    board.like += 1;
    board.save();
  } catch(error) {
    res.status(400)
    console.log(error)
  } finally {
    res.end()
  }
};

// 게시글 싫어요
export const boardLikeDown = async (req, res) => {
  const {
    body: { boardId },
  } = req;

  try {
    const board = await Board.findById(boardId);
    board.unlike += 1;
    board.save();
  } catch(error) {
    res.status(400)
    console.log(error)
  } finally {
    res.end()
  }
};
