import routes from "../routes.js";
import passport from "passport";
import User from "../models/User.js";

export const getLogin = (req, res) => {
  res.render("login", { pageName: "로그인" });
};

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};
// naver login
export const naverLogin = passport.authenticate("naver");

export const postNaverLogin = (req, res) => {
  res.redirect(routes.home);
};

export const naverLoginCallback = async (
  accessToken,
  refreshToken,
  profile,
  done
) => {
  const {
    _json: { id, email, nickname },
  } = profile;

  try {
    const user = await User.findOne({ email });
    if (user) {
      user.naverId = id;
      user.name = user.name ? user.name : nickname;
      user.email = email;
      user.avataUrl = user.avataUrl ? user.avataUrl : "https://mytubeclone.s3.amazonaws.com/avatar/a9cbfe8bfa2a2b98a408c2a6c1b42157";
      user.save();
      return done(null, user);
    } else {
      const newUser = await User.create({
        email,
        name: nickname,
        naverId: id,
        avataUrl : "https://mytubeclone.s3.amazonaws.com/avatar/a9cbfe8bfa2a2b98a408c2a6c1b42157"
      });
      return done(null, newUser);
    }
  } catch (error) {
    return done(error);
  }
};

// github login
export const githubLogin = passport.authenticate("github");

export const postGithubLogin = (req, res) => {
  res.redirect(routes.home);
};

export const githubLoginCallback = async (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  const {
    _json: { id, avatar_url, name, email },
  } = profile;

  try {
    const user = await User.findOne({ email });
    if (user) {
      user.githubId = id;
      user.avataUrl = avatar_url;
      user.name = name;
      user.email = email;
      user.save();

      return cb(null, user);
    }
    const newUser = await User.create({
      email,
      name,
      githubId: id,
      avataUrl: avatar_url,
    });

    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

// facebook login
export const facebookLogin = passport.authenticate("facebook");

export const facebookLoginCallback = async (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  console.log(accessToken, refreshToken, profile, cb);
};

export const postFacebookLogin = (req, res) => {
  res.redirect(routes.home);
};

// kakao login
export const kakaoLogin = passport.authenticate("kakao");

export const kakaoLoginCallback = async (
  accessToken,
  refreshToken,
  profile,
  done
) => {
  console.log(profile)
  
  const {
    _json: {
      id,
      properties: { profile_image, nickname },
      kakao_account: { email },
    },
  } = profile;

  try {
    const user = await User.findOne({ email });
    if (user) {
      (user.kakaoId = id),
        (user.avataUrl = user.avataUrl ? user.avataUrl : profile_image),
        (user.name = user.name ? user.name : nickname),
        (user.email = email);
      user.save();

      return done(null, user);
    } else {
      const newUser = await User.create({
        email,
        name: nickname,
        kakaoId: id,
        avataUrl:profile_image,
      });
      return done(null, newUser);
    }
  } catch (error) {
    return done(error);
  }
};

export const postKakaoLogin = (req, res) => {
  res.redirect(routes.home);
};
