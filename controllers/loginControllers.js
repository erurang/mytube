import routes from "../routes.js";
import passport from "passport";

export const getLogin = (req, res) => {
  res.render("login", { pageName: "로그인" });
};

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});

export const logout = (req, res) => {
  req.logout()
  res.redirect(routes.home);
};
