// 모든 url을 다룹니다.

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
const EDIT_PROFILE = "/edit_profile";
const CHANGE_PASSWORD = "/change_password";
const ME = "/me";

// 소셜로그인

const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

const FACEBOOK = "/auth/facebook";
const FACEBOOK_CALLBACK = "/auth/facebook/callback";

const KAKAO = "/auth/kakao";
const KAKAO_CALLBACK = "/auth/kakao/callback";

const NAVER = "/auth/naver";
const NAVER_CALLBACK = "/auth/naver/callback"

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
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
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
  facebook:FACEBOOK,
  facebookCallback:FACEBOOK_CALLBACK,
  kakao:KAKAO,
  kakaoCallback:KAKAO_CALLBACK,
  naver:NAVER,
  naverCallback:NAVER_CALLBACK,
  me: ME,
};
export default routes;
