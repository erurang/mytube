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

const routes = {
    home:HOME,
    search:SEARCH,
    boards:BOARDS,
    videos:VIDEOS,
    upload:UPLOAD,
    videoDetail:VIDEO_DETAIL,
    editVideo:EDIT_VIDEO,
    deleteVideo:DELETE_VIDEO,
}

export default routes;