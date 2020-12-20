import User from "../models/User.js";
import routes from "../routes.js";

export const users = (req, res) => {
  res.render("users", { pageName: "유저" });
};

export const me = (req,res) => {
  console.log(req.user)
  
  res.render("userDetail",{pageName:"유저상세",user:req.user})
}

export const userDetail = async (req, res) => {
  const {params:{id}} = req;

  try{
    const user = await User.findById(id);
    res.render("userDetail",{pageName:"유저상세",user})
  }catch(error){
    res.redirect(routes.home);
  }
  
  
  
};
