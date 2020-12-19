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
    res.status(400);
    res.render("join", { pageName: "가입" });
  } else {
    try {
      // 가입
      // 여기서 우리 user 모델로 오브젝트만 만듬
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      next()
    } catch (error) {
      console.log(error);
    }
  }
};
