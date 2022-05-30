
## Mytube (ver0.35) 완료

## - 사용된 기술스택

Node.js - express로 서버를 만들었습니다. </br>
Mongodb(mongoose) - mongodb(local) mongodb atlas를 통하여 사용자의 글/영상/댓글/아이디을 관리합니다.</br>
AmazonS3 - Multer Amazon을 사용하여 아마존서버에 영상과 프로필사진을 업로드합니다.</br>
PUG - Node.js의 템플릿엔진으로 View를 담당하였습니다.</br>
Passport - 사용자 인증과정을 위해 이용하였습니다.</br>
babel - ES6 이상의 최신문법을 사용하기위한 바벨입니다.</br>
Webpack,Scss - 배포와 CSS를 구분하였습니다. </br>

## - 메인화면

<img width="1907" alt="스크린샷 2021-02-08 오전 3 40 17" src="https://user-images.githubusercontent.com/56789064/107156053-5fb06d80-69bf-11eb-8036-027ba5108e06.png">

처음 메인화면에는 사용자가 업로드한 영상들이 그리드로 나뉘어져서 목록에 올라옵니다.

## - 가입화면

<img width="1905" alt="스크린샷 2021-02-08 오전 3 42 04" src="https://user-images.githubusercontent.com/56789064/107156101-a2724580-69bf-11eb-8be0-d65485cb3e6c.png">

로그인 화면입니다. 카카오톡/네이버 로그인은 패스포트를 이용하여 구현하였습니다.
위의 form형식으로도 가입이 가능합니다. 중복메일 가입을 막기위해서 mongodb 안의 사용자의 이메일과 비교하여
이메일 중복이 있다면 기존에 가입된 아이디로 연결되도록 하였습니다.

## - 로그인시에 

<img width="1896" alt="스크린샷 2021-02-08 오전 3 44 22" src="https://us
er-images.githubusercontent.com/56789064/107156154-f54bfd00-69bf-11eb-8270-5b9dfb02d3d3.png">

로그인시에 헤더가 오른쪽과 같이 비디오/게시판/프로필/로그아웃으로 변경됩니다.

## - 비디오검색

검색란에 비디오를 검색하면 검색어에 해당하는 영상들을 보여줍니다.

<img width="1905" alt="스크린샷 2021-02-08 오전 4 01 03" src="https://user-images.githubusercontent.com/56789064/107156560-68567300-69c2-11eb-9696-6caba2b4818b.png">

검색결과가 없으면 나타나지않습니다.

<img width="1890" alt="스크린샷 2021-02-08 오전 4 02 36" src="https://user-images.githubusercontent.com/56789064/107156589-84f2ab00-69c2-11eb-9a7f-10559cb8aef3.png">

## - 비디오상세화면

<img width="1900" alt="스크린샷 2021-02-08 오전 3 46 00" src="https://user-images.githubusercontent.com/56789064/107156178-2e846d00-69c0-11eb-95c4-f854cce04c16.png">

메인의 비디오를 클릭하면 나오는 상세화면입니다.

중간에 비디오가 나오고 오른쪽에 비디오가 올라온 순서대로 영상/제목/작성자/조회수 가 뜨도록 하였습니다.

메인 비디오 아래의 VideoEdit와 VideoDelete는 글을 작성한 작성자외의 다른사용자에게는 보이지않습니다.

## - 비디오 수정

<img width="1322" alt="스크린샷 2021-02-08 오전 4 10 57" src="https://user-images.githubusercontent.com/56789064/107156781-aacc7f80-69c3-11eb-9138-3db0a8e786f6.png">

수정버튼을 누르면 제목과 내용이 textarea로 변경되어 있고 수정을 한후 수정을 누르면 적용됩니다.

<img width="1906" alt="스크린샷 2021-02-08 오전 3 50 09" src="https://user-images.githubusercontent.com/56789064/107156275-c2eecf80-69c0-11eb-9ca6-047a74560df0.png">

로그아웃되어 헤더가 조인/로그인 으로 변하였고 비디오화면아래의 수정/삭제 기능은 사라진것을 볼수있습니다.

![ㅁㄴㅇㄹㅁㅇㄴㄹ](https://user-images.githubusercontent.com/56789064/107156725-6345f380-69c3-11eb-86d8-e04eff04829c.gif)

이 프로젝트는 자바스크립트로 만들어졌지만 실시간인것처럼 반영하기위해 DOM을 조작하여서

실시간으로 좋아요/싫어요 가 갱신되는것처럼 보이게 하였습니다.

비디오에 있는 각 댓글들도 사용자가 아닐땐 수정/삭제가 보이지 않도록 하였습니다.

<img width="709" alt="스크린샷 2021-02-08 오전 3 55 14" src="https://user-images.githubusercontent.com/56789064/107156405-78218780-69c1-11eb-88b0-1f9230b454f7.png">

<img width="628" alt="스크린샷 2021-02-08 오전 3 53 33" src="https://user-images.githubusercontent.com/56789064/107156368-3e508100-69c1-11eb-8152-951de5f35b90.png">

## - 작성한 게시글 확인하기

작성자의 닉네임을 누르면 작성자가 게시한 글을 볼수있도록 하였습니다.

<img width="1899" alt="스크린샷 2021-02-08 오전 3 56 26" src="https://user-images.githubusercontent.com/56789064/107156432-a30bdb80-69c1-11eb-96e0-675090f04d86.png">

로그인이 된 사용자가 왼쪽의 MY POST를 누르면 자기가 쓴 게시글들을 확인할수있습니다.

<img width="1898" alt="스크린샷 2021-02-08 오전 3 57 27" src="https://user-images.githubusercontent.com/56789064/107156455-c9ca1200-69c1-11eb-8cc0-89764d4414a2.png">

## - Hottest Video/Board

좋아요 숫자가 높은 순서대로 영상이 sort되어 순서대로 나타납니다.
<img width="1378" alt="스크린샷 2021-02-08 오전 4 12 43" src="https://user-images.githubusercontent.com/56789064/107156839-00089100-69c4-11eb-99e6-f034fcad30f2.png">

## - 프로필

<img width="1895" alt="스크린샷 2021-02-08 오전 3 58 35" src="https://user-images.githubusercontent.com/56789064/107156487-f4b46600-69c1-11eb-9b93-b34ac74a708e.png">

프로필의 기본사진은 파란색머리 사진입니다. 프로필 수정하기를 누르면 아래사진과같이 변경이 가능합니다.

<img width="667" alt="스크린샷 2021-02-08 오전 3 59 54" src="https://user-images.githubusercontent.com/56789064/107156518-1e6d8d00-69c2-11eb-9847-f3897d21ca6d.png">

