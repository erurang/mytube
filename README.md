## Mytube (ver0.25)

ver0.1 -- 
사용된 기술스택은 PUG Javascript NodeJs입니다.

ver0.2 --
mongodb와 mongoose를 이용하여 데이터베이스를 만들었습니다.
upload기능을 구현하였습니다.
videodetail 기능을 구현하였습니다.

ver0.25 -- 
video 글삭제기능을 구현하였습니다.
video 글수정기능을 구현하였습니다.
**비디오 fielurl을 upload/video에서 가져오지 않고 views 에서 끌어와서 영상이 로딩이되지않는 버그가 있습니다. 해결할예정입니다**

board(게시판)에서 글쓰기 기능과 글목록을 구현하였습니다. 
(다음버전에 삭제기능과 수정기능을 구현할 계획입니다.)

### ver0.3 카테고리

Folder// </br>
controllers - 각 라우터들을 처리할 컨트롤러입니다. </br>
routers - 각 라우터들을 컨트롤러로 연결합니다. </br>
views - PUG 엔진으로 front를 담당합니다. </br>
models - mongodb의 Schema 형식입니다. </br>
uploads - multer 미들웨어를 사용하여 upload시에 파일의 링크가 저장됩니다 </br>
</br>
Files// </br>
app.js - 모든 라우트와 미들웨어를 다룹니다.</br>
init.js - 서버실행만 담당합니다.</br>
middleWare.js - 변수가 전역적으로 쓰일수 있게 미들웨어로 전역로컬을 선언하였습니다.</br>
routes.js - 웹페이지에 사용될 전체 URL을 다루었습니다.</br>
