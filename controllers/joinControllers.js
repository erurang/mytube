import routes from "../routes.js";
import User from "../models/User.js";

export const getJoin = (req, res) => {
  res.render("join", { pageName: "가입" });
};

export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 },
  } = req;

  if (password !== password2) {
    req.flash("error", "패스워드가 다릅니다");
    res.status(400);
    res.render("join", { pageName: "가입" });
  } else {
    try {
      const user = await User.findOne({ email });

      if (user) {
        // 나중에 인풋창에 이미 존재한다고 표시하기
        // 지금은 일단 로그인창으로 리다이렉트
        res.redirect(routes.login);
      } else {
        const user = await User({
          name,
          email,
          avataUrl:
            "https://mytubeclone.s3.amazonaws.com/avatar/a9cbfe8bfa2a2b98a408c2a6c1b42157",
        });
        await User.register(user, password);
        next();
      }
    } catch (error) {
      console.log(error);
    }
  }
};
