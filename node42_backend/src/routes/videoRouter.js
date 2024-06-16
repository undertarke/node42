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


// FILE SYSTEM
import fs from 'fs'
import { upload } from "../config/upload.js";



videoRouter.post("/upload", upload.single("hinhAnh"), (req, res) => {
    let file = req.file

    res.send(file)
})

import compress_images from 'compress-images'

videoRouter.post("/demo-upload", upload.single("upload"), (req, res) => {
    let { file } = req;
    // tối ưu hình
    // image > 700KB
    compress_images(
        process.cwd() + "/public/img/" + file.filename,
        process.cwd() + "/public/img_com/",
        { compress_force: false, statistic: true, autoupdate: true }, false,
        { jpg: { engine: "mozjpeg", command: ["-quality", "15"] } },
        { png: { engine: "pngquant", command: ["--quality=10-30", "-o"] } },
        { svg: { engine: "svgo", command: "--multipass" } },
        { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
        function (error, completed, statistic) {
            // xóa hình chưa tối ưu
        }
    );

    // tạo file data.txt => hello CAT
    //fs.writeFile(process.cwd() + "/data.txt", "hello CAT", (err) => { })
    // let error = fs.writeFileSync(process.cwd() + "/data.txt", "hello CAT")


    // tạo hình base64
    // fs.readFile(process.cwd() + "/public/img/" + file.filename, (err, data) => {

    //     let base64 = Buffer.from(data).toString("base64")
    //     let image = `data:${file.mimetype};base64,${base64}`

    //     res.send(image)

    // })

})






export default videoRouter