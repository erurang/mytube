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
const BOARDS_DETAIL = "/:id"
const BOARDS_UPLOAD = "/upload";

const routes = {
  home: HOME,
  search: SEARCH,
  boards: BOARDS,
  boardsDetail: (id) => {
    if (id){
      return `/boards/${id}`;
    }else{
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
};
export default routes;
