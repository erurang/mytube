import passport from "passport";
import User from "./models/User.js"

// npm i passport passport-local 
// npm i passport passport-"kakao,, facebook.." 사용자 인증방식임

// strategy는 로그인하는 방식을 뜻함.
passport.use(User.createStrategy())

// user모델의 어떤 Field가 쿠키포함될것인지 정해 (쿠키를 줌)
// user id가 기본 default임
passport.serializeUser(User.serializeUser());

// 어느 사용자인지 어떻게 찾을래? (쿠키의 정보를 해석)
passport.deserializeUser(User.deserializeUser());
