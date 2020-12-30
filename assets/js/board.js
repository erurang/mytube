import axios from "axios";

// 게시판

const addBCommentForm = document.getElementById("jsBoardAddComment");
const jsboardCommentUser = document.getElementById("jsBoardCommentUser");
const jsBoardCommentUserBtn = document.querySelectorAll("jsBoardCommentUserBtn")
const jsBoardCommentNum = document.getElementById("jsBoardCommentNum")
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

// 게시판 댓글수정 삭제 댓글 좋아요 싫어요

const handleComment = (event) => {
  console.log(event);
  // 댓글 수정
  if (event.target.parentNode.className == "jsCommentEdit") {
    const value = event.target.parentNode;

    const text = document.createElement("textarea");
    const form = document.createElement("form");
    const input = document.createElement("input");

    const test = String(event.target.parentNode.parentNode.id);

    input.type = "submit";
    input.value = "수정";
    text.name = "edit";
    form.method = "get";

    value.appendChild(form);
    form.appendChild(text);
    form.appendChild(input);
  }

  // 댓글 삭제
  if (event.target.parentNode.className == "jsCommentDelete") {
    const value = event.target.parentNode.parentNode.id;
    CommentDelete(value);

    jsBoardCommentUserBtn.forEach((n) => {
      if (n.id == value) {
        fakeDelete(n);
      }
    });
  }


    // 댓글 좋아요
    if (event.target.id == "jsBoardsCommentLike") {
      const value = event.target.parentNode.parentNode.id;
      const node = event.target;
      commentThumbsUp(value, event);
    }

  // 댓글 싫어요
  if (event.target.id == "jsBoardsCommentunLike") {
    const value = event.target.parentNode.parentNode.id;
    commentThumbsDown(value, event);
  }
};

// 댓글좋아요
const commentThumbsUp = async (value, event) => {
  const response = await axios({
    url: `/api/${value}/CommentLike`,
    method: "POST",
    data: {
      value,
    },
  });
  if (response.status == 200) {
    console.log("굿따봉성공");
    commentFakeLike(event);
  }
};

const commentFakeLike = (event) => {
  const num = Number(event.target.innerText);
  event.target.innerHTML = ` <i class="fas fa-thumbs-up" aria-hidden="true"></i> <span>${
    num + 1
  }</span>`;
};

// 댓글싫어요
const commentThumbsDown = async (value, event) => {
  const response = await axios({
    url: `/api/${value}/CommentunLike`,
    method: "POST",
    data: {
      value,
    },
  });
  if (response.status == 200) {
    console.log("배드따봉성공");
    commentFakeunLike(event);
  }
};

const commentFakeunLike = (event) => {
  const num = Number(event.target.innerText);
  event.target.innerHTML = ` <i class="fas fa-thumbs-down" aria-hidden="true"></i> <span>${
    num + 1
  }</span>`;
};


const fakeDelete = (p) => {
  const num = jsBoardCommentNum.textContent;
  jsBoardCommentNum.textContent = num - 1;
  p.remove();
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

// 게시판 글 좋아요 싫어요
const like = document.querySelector(".boardLike");
const unlike = document.querySelector(".boardunLike");

const likeUp = async () => {
  const boardId = window.location.href.split("/boards/")[1];

  const response = await axios({
    url: `/api/${boardId}/like/board`,
    method: "POST",
    data: {
      boardId,
    },
  });
  if (response.status === 200) {
    console.log("성공");
  }
};

const unlikeDown = async () => {
  const boardId = window.location.href.split("/boards/")[1];

  const response = await axios({
    url: `/api/${boardId}/unlike/board`,
    method: "POST",
    data: {
      boardId,
    },
  });
  if (response.status === 200) {
    console.log("성공");
  }
};

if (like) {
  like.addEventListener("click", likeUp);
  unlike.addEventListener("click", unlikeDown);
}

if (addBCommentForm) {
  addBCommentForm.addEventListener("submit", handleBSubmit);
  jsboardCommentUser.addEventListener("click", handleComment);
}
