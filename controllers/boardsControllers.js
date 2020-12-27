import Board from "../models/Boards.js";
import routes from "../routes.js";
import Comment from "../models/Comment.js"
import User from "../models/User.js"

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

  const user = await User.findById(req.user._id)
  user.boards.push(newBoards._id)
  user.save();

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

    res.render("boardsDetail", {
      pageName: "게시판",
      id,
      boards,
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

export const boardViews = async (req, res,next) => {
  const {
    params: { id },
  } = req;

  
    const boards = await Board.findById(id);
    boards.views += 1;
    boards.save();
    next();
  
};

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
      avataUrl : req.user.avataUrl
    });
  

    board.comments.push(newComment._id);
    board.save();

  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};

export const BCommentDelete = async (req,res) => {
  const {
   body:{value} 
  } = req;

  try {
    const comment = await Comment.findByIdAndDelete({_id:value});
    comment.save();
  }catch(error) {
    res.status(400);
  }finally {
    res.status(200);
  }

}