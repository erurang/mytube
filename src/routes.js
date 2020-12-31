// 모든 url을 다룹니다.

const ABOUT = "/about";

// 메인화면과 헤더
const HOME = "/";
const SEARCH = "/search";

// 모든 비디오 관련
const VIDEOS = "/videos";
const UPLOAD = "/upload";

const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

// 게시판

const BOARDS = "/boards";
const BOARDS_HOT = "/hot";
const BOARDS_UPLOAD = "/upload";

const BOARDS_DETAIL = "/:id";
const BOARDS_EDIT = "/:id/edit";
const BOARDS_DELETE = "/:id/delete";

// 로그인관련

const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

// 유저관련

const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/:id/edit_profile";

const ME = "/me";
const CHANGE_PASSWORD = "/change_password";
const MYPOST = "/:id/mypost";
const YOURPOST = "/:id/yourpost";

// 소셜로그인

const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

const FACEBOOK = "/auth/facebook";
const FACEBOOK_CALLBACK = "/auth/facebook/callback";

const KAKAO = "/auth/kakao";
const KAKAO_CALLBACK = "/auth/kakao/callback";

const NAVER = "/auth/naver";
const NAVER_CALLBACK = "/auth/naver/callback";

// API

const API = "/api";
const REGISTER_VIEW = "/:id/view";

// 비디오
const LIKE = "/:id/like";
const UNLIKE = "/:id/unlike";

// 비디오 댓글
const CommentLike = "/:id/CommentLike";
const CommentunLike = "/:id/CommentunLike";

const ADD_COMMENT = "/:id/comment";
const EDIT_COMMENT = "/:id/comment/edit"
const DELETE_COMMENT = "/:id/comment/delete";

// 게시글
const BOARD_LIKE = "/:id/like/board";
const BOARD_UNLIKE = "/:id/unlike/board";

// 게시글 댓글 삭제
const B_ADD_COMMENT = "/:id/Bcomment";
const B_DELETE_COMMENT = "/:id/Bcomment/delete";


// 게시판


const routes = {
  home: HOME,
  search: SEARCH,
  boards: BOARDS,
  users: USERS,
  userDetail: (id) => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  editProfile: (id) => {
    if (id) {
      return `/users/${id}/edit_profile`;
    } else {
      return EDIT_PROFILE;
    }
  },
  changePassword: CHANGE_PASSWORD,
  myPost: (id) => {
    if (id) {
      return `/users/${id}/mypost`;
    } else {
      return MYPOST;
    }
  },
  yourPost: (id) => {
    if (id) {
      return `/users/${id}/yourpost`;
    } else {
      return YOURPOST;
    }
  },
  boardsDelete: (id) => {
    if (id) {
      return `/boards/${id}/delete`;
    } else {
      return BOARDS_DELETE;
    }
  },
  boardsEdit: (id) => {
    if (id) {
      return `/boards/${id}/edit`;
    } else {
      return BOARDS_EDIT;
    }
  },
  boardsDetail: (id) => {
    if (id) {
      return `/boards/${id}`;
    } else {
      return BOARDS_DETAIL;
    }
  },
  boardsUpload: BOARDS_UPLOAD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: (id) => {
    if (id) {
      return `/videos/${id}`;
    } else {
      return VIDEO_DETAIL;
    }
  },
  editVideo: (id) => {
    if (id) {
      return `/videos/${id}/edit`;
    } else {
      return EDIT_VIDEO;
    }
  },
  deleteVideo: (id) => {
    if (id) {
      return `/videos/${id}/delete`;
    } else {
      return DELETE_VIDEO;
    }
  },
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  github: GITHUB,
  githubCallback: GITHUB_CALLBACK,
  facebook: FACEBOOK,
  facebookCallback: FACEBOOK_CALLBACK,
  kakao: KAKAO,
  kakaoCallback: KAKAO_CALLBACK,
  naver: NAVER,
  naverCallback: NAVER_CALLBACK,
  me: ME,
  api: API,
  registerView: REGISTER_VIEW,
  addcomment: ADD_COMMENT,
  deleteComment: DELETE_COMMENT,
  bcommentAddComment: B_ADD_COMMENT,
  bcommentDelete: B_DELETE_COMMENT,
  like: LIKE,
  unlike: UNLIKE,
  boardlike: BOARD_LIKE,
  boardunlike: BOARD_UNLIKE,
  commentlike: CommentLike,
  commentunlike: CommentunLike,
  boardhot: BOARDS_HOT,
  about: ABOUT,
  commnetedit : EDIT_COMMENT,
};
export default routes;
