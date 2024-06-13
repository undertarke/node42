import express from "express";

import { createVideo, getVideo, getVideoType, getVideoWithType, getVideoPage, getVideoById } from "../controllers/videoController.js";
import { middleToken } from "../config/jwt.js";

const videoRouter = express.Router();

// API chức năng
videoRouter.get("/get-video", getVideo)



// API get video-type
videoRouter.get("/get-video-type", getVideoType)

// API get video with type
videoRouter.get("/get-video-with-type/:typeId", getVideoWithType)

// API get video page
videoRouter.get("/get-video-page/:page", getVideoPage)

// API get video by id
videoRouter.get("/get-video-by-id/:videoId", getVideoById)





import multer, { diskStorage } from 'multer'

// yarn add multer

const upload = multer({
    storage: diskStorage({
        destination: process.cwd() + "/public/img", // nơi khai báo đường dẫn lưu file
        filename: (req, file, callback) => {  // đổi tên file

            // lưu ý nhảy audition =>>> 156234234325_●◉✿๖ۣۜLiên Kích ✘Liên Kích Đẹpッ✿◉●
            let date = new Date()
            callback(null, date.getTime() + "_" + file.originalname) // 1718200974007_cat.jpeg
        }
    })
})

videoRouter.post("/upload", upload.single("hinhAnh"), (req, res) => {
    let file = req.file

    res.send(file)
})








export default videoRouter