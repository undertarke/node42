import express from "express";

import { createVideo, getVideo } from "../controllers/videoController.js";

const videoRouter = express.Router();

// API chức năng
videoRouter.get("/get-video", getVideo)

// API create video
videoRouter.post("/create-video",createVideo)

export default videoRouter