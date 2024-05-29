import express from "express";

import { createVideo, getVideo, getVideoType, getVideoWithType, getVideoPage } from "../controllers/videoController.js";

const videoRouter = express.Router();

// API chức năng
videoRouter.get("/get-video", getVideo)

// API get video-type
videoRouter.get("/get-video-type", getVideoType)

// API get video with type
videoRouter.get("/get-video-with-type/:typeId", getVideoWithType)

// API get video page
videoRouter.get("/get-video-page/:page", getVideoPage)

// API create video
videoRouter.post("/create-video", createVideo)

export default videoRouter