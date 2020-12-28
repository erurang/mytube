import axios from "axios";

const like = document.getElementById("jsBoardsUp");
const unlike = document.getElementById("jsBoardsDown");

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
