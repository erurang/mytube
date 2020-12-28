import axios from "axios";

// 비디오
const addCommentForm = document.getElementById("jsAddComment");

const CommentEditBtn = document.querySelectorAll(".jsCommentEdit");
const CommentDeleteBtn = document.querySelectorAll(".jsCommentDelete");

// 게시판

const addBCommentForm = document.getElementById("jsBoardAddComment");

// 비디오 댓글생성
const handleSubmit = (event) => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

const sendComment = async (comment) => {
  const videoId = window.location.href.split("/videos/")[1];

  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment,
    },
  });

  if (response.status === 200) {
    console.log("댓글 생성 성공");
  }
};
// 비디오 댓글수정

const handleEdit = (event) => {
  console.log("hi");
};

// 비디오 댓글삭제

const handleDelete = (event) => {
  const value = event.target.id;

  CommentDelete(value);
};

const CommentDelete = async (value) => {
  const response = await axios({
    url: `/api/${value}/comment/delete`,
    method: "POST",
    data: {
      value,
    },
  });
  if (response.status === 200) {
    console.log("댓글 삭제 성공");
  }
};

// 게시판 댓글생성

const handleBSubmit = (event) => {
  event.preventDefault();
  const commentInput = addBCommentForm.querySelector("input");
  const comment = commentInput.value;
  BSendComment(comment);
  commentInput.value = "";
};

const BSendComment = async (comment) => {
  const boardId = window.location.href.split("/boards/")[1];

  const response = await axios({
    url: `/api/${boardId}/Bcomment`,
    method: "POST",
    data: {
      comment,
    },
  });

  if (response.status === 200) {
    console.log("댓글 생성 성공");
  }
};

// 게시판 댓글수정

// 게시판 댓글삭제

// 비디오 댓글이 있을떄 addeventlister준비
if (addCommentForm) {
  addCommentForm.addEventListener("submit", handleSubmit);

  for (let i = 0; i < CommentEditBtn.length; i++) {
    console.log("test");
    // CommentEditBtn[i].addEventListener("click",(handleEdit)
    CommentDeleteBtn[i].addEventListener("click", handleDelete);
  }

  // const CommentEditBtn = document.querySelectorAll(".jsCommentEdit");
  // CommentEditBtn.addEventListener("click",handleEdit)
  // CommentEditBtn.forEach((n) => n.addEventListener("click", handleEdit);
  // CommentDeleteBtn.forEach((n) => n.addEventListener("click", handleDelete));
}

// 게시판 댓글이 있을때 addeventlister준비

if (addBCommentForm) {
  addBCommentForm.addEventListener("submit", handleBSubmit);
}
