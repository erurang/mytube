import axios from "axios";

const like = document.getElementById("jsVideoUp");
const unlike = document.getElementById("jsVideoDown");

// const commentLike = document.getElementById("jsCommentLike")
// const commentunLike = document.getElementById("jsCommentunLike")

// const commentLikeUp = async () => {
//     const videoId = window.location.href.split("/videos/")[1];

//     const response = await axios({
//         url: `/api/${videoId}/like`,
//         method:"POST",
//         data : {
//             videoId
//         }
//     })
//     if (response.status === 200) {
//         console.log("성공")
//     }
// }

const likeUp = async () => {
  const videoId = window.location.href.split("/videos/")[1];

  const response = await axios({
    url: `/api/${videoId}/like`,
    method: "POST",
    data: {
      videoId,
    },
  });
  if (response.status === 200) {
    console.log("성공");
  }
};

const unlikeDown = async () => {
  const videoId = window.location.href.split("/videos/")[1];

  const response = await axios({
    url: `/api/${videoId}/unlike`,
    method: "POST",
    data: {
      videoId,
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
