import routes from "./routes.js";

export const middleWare = (req,res,next) => {
    res.locals.routes = routes;
    res.locals.siteName = "Mytube";
    next();
}
