import axios from "axios";

// 비디오
const addCommentForm = document.getElementById("jsAddComment");
const jsCommentUser = document.getElementById("jsCommentUser");

const jsCommentUserBtn = document.querySelectorAll(".jsCommentUserBtn");
const jsCommentNum = document.getElementById("jsCommentNum");

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

// 비디오 댓글수정 삭제

const handleComment = (event) => {
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

    jsCommentUserBtn.forEach((n) => {
      if (n.id == value) {
        fakeDelete(n);
      }
    });
  }

  // 댓글 좋아요
  if (event.target.id == "jsCommentLike") {
    const value = event.target.parentNode.parentNode.id;
    const node = event.target;
    commentThumbsUp(value,event);
  }

  // 댓글 싫어요
  if (event.target.id == "jsCommentunLike") {
    const value = event.target.parentNode.parentNode.id;
    commentThumbsDown(value,event);
  }
};

// 댓글좋아요
const commentThumbsUp = async (value,event) => {
  const response = await axios({
    url: `/api/${value}/CommentLike`,
    method: "POST",
    data: {
      value,
    },
  });
  if (response.status == 200) {
    console.log("굿따봉성공");
    commentFakeLike(event)
  }
};

const commentFakeLike = (event) => {
  const num = Number(event.target.innerText)
  event.target.innerHTML = ` <i class="fas fa-thumbs-up" aria-hidden="true"></i> <span>${num+1}</span>`
}

// 댓글싫어요
const commentThumbsDown = async (value,event) => {
  const response = await axios({
    url: `/api/${value}/CommentunLike`,
    method: "POST",
    data: {
      value,
    },
  });
  if (response.status == 200) {
    console.log("배드따봉성공");
    commentFakeunLike(event)
  }
};

const commentFakeunLike = (event) => {

  const num = Number(event.target.innerText)
  event.target.innerHTML = ` <i class="fas fa-thumbs-down" aria-hidden="true"></i> <span>${num+1}</span>`

}


// 가라삭제
const fakeDelete = (p) => {
  const num = jsCommentNum.textContent;
  jsCommentNum.textContent = num - 1;
  p.remove();
};

// 댓글수정
const CommentEdit = async (value) => {
  const response = await axios({
    url: `/api/${value}/comment/edit`,
    method: "POST",
    data: {
      value,
    },
  });

  if (response.status === 200) {
    console.log("댓글 수정 성공");
  }
};

// 댓글삭제
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

// 비디오 댓글이 있을떄 addeventlister준비
if (addCommentForm) {
  addCommentForm.addEventListener("submit", handleSubmit);
  jsCommentUser.addEventListener("click", handleComment);
}
