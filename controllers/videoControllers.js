export const videos = (req,res) => {
    res.render("videos",{pageName:"영상"})
}

export const upload = (req,res) => {
    console.log(req);
    res.render("upload",{pageName:"업로드"})
}

export const videoDetail = (req,res) => {
    res.render("videoDetail",{pageName:"비디오 상세"})
}

export const editVideo = (req,res) => {   
    res.render("editVideo",{pageName:"수정"})
}