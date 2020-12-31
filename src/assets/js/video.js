import axios from "axios";

const like = document.getElementById("jsVideoUp");
const unlike = document.getElementById("jsVideoDown");

const likeUp = async (event) => {
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
    commentFakeLike()
  }
};

const commentFakeLike = () => {
  const like = document.querySelector(".videoLike")
  const num = Number(like.textContent)
  like.textContent = num + 1  
}

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
    commentFakeunLike()
  }
};

const commentFakeunLike = () => {
  const like = document.querySelector(".videounLike")
  const num = Number(like.textContent)
  like.textContent = num + 1  
}



if (like) {
  like.addEventListener("click", likeUp);
  unlike.addEventListener("click", unlikeDown);
}
