export const search = (req,res) => {
    console.log(req)
    const {query:{
        search
    }} = req;
    res.render("search",{search,pageName:"검색"});
}