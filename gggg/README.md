## Mytube (ver0.35) 완료

이 버전 이후로 추가적인 기능은 없습니다.
수정보완될 부분만 커밋할 예정입니다.

사용된 기술스택
--
>Javascript Node.js</br>
PUG Mongodb(mongoose) Passport babel 
Webpack Scss   

ver0.2
--
>mongodb와 mongoose를 이용하여 데이터베이스를 만들었습니다.</br>
upload기능을 구현하였습니다.</br>
videodetail 기능을 구현하였습니다.

ver0.25
--
>video 글삭제기능을 구현하였습니다.</br>
video 글수정기능을 구현하였습니다.</br>
**비디오 fielurl을 upload/video에서 가져오지 않고 views 에서 끌어와서 영상이 로딩이되지않는 버그가 있습니다. 해결할예정입니다**</br>
board(게시판)에서 글쓰기 기능과 글목록을 구현하였습니다. 

ver0.275
--
>video 영상탭에서 영상이 재생되지 않던 오류를 해결했습니다. (app.js express.static()을 사용)</br>
게시판 글수정과 삭제 기능을 구현하였습니다.</br>

ver0.3
--
>회원가입 탭을 구현하였습니다.</br>
로그인 로그아웃 프로필 탭을 구현하였습니다.</br>
로그아웃 상태일때는 가입하기/로그인 로그인 상태일때는 프로필/로그아웃 으로 헤더가 변하도록 하였습니다.</br>
각 영상/게시판글에서 작성자를 볼수있게 하였습니다.</br>
작성자를 클릭하면 작성자의 유저프로필로 이동하며 작성글보기 기능을 구현하였습니다.</br>
프로필 수정하기를 통해 프로필사진/별명을 수정할수 있도록 하였습니다.</br>

>
>passport로 로그인/로그아웃 기능을 구현하였습니다.
>- 쿠키와 세션으로 로그인 유지가 가능합니다.
>- 네이버로 가입/로그인 기능을 구현하였습니다.
>- 카카오톡으로 가입/로그인 기능을 구현하였습니다.
>- 깃허브로 가입/로그인 기능을 구현하였습니다.
>- 페이스북로 가입/로그인 기능을 구현하였습니다.
>- email이 같을시에 usermodel안의 id를 추가해 동일이메일 가입을 방지하였습니다.

ver0.35
--
> 게시판/영상에 댓글 추가 삭제 수정 기능이 구현되었습니다.
css로 약간 꾸몃습니다
아마존서버로 영상파일/프로필사진파일을 multer를 통해 업로드합니다.



### ver0.3 카테고리

>Folder// </br>
assets - front 정적파일들을 담당합니다. </br>
controllers - 각 라우터들을 처리할 컨트롤러입니다. </br>
routers - 각 라우터들을 컨트롤러로 연결합니다. </br>
views - PUG 엔진으로 front를 담당합니다. </br>
models - mongodb의 Schema 형식입니다. </br>
uploads - multer 미들웨어를 사용하여 upload시에 파일의 링크가 저장됩니다 </br>
</br>
>Files// </br>
app.js - 모든 라우트와 미들웨어를 다룹니다.</br>
init.js - 서버실행만 담당합니다.</br>
middleWare.js - 변수가 전역적으로 쓰일수 있게 미들웨어로 전역로컬을 선언하였습니다.</br>
routes.js - 웹페이지에 사용될 전체 URL을 다루었습니다.</br>
passport.js - 패스포트 설정파일입니다.
