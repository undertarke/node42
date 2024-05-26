import Video from "../models/video.js"

import initModels from "../models/init-models.js"
import sequelize from "../models/connect.js"

let model = initModels(sequelize)

// sequelize.query("SELECT * FROM video ")

// SELECT * FROM video 
// localhost:8080/video/get-video
const getVideo = async (req, res) => {

    // SELECT * FROM Video WHERE video_id = 2
    // [{},{},{}]
    // {}

    // video JOIN video_type
    // video JOIN user
    let data = await model.video.findAll({
        include: ["type", "user"],
        where: {
            video_id: videoId
        }
    })



    let data2 = await model.video.findOne({
        where: {
            video_id: 2
        }
    })
    // tìm kiếm theo primary key
    let data3 = await model.video.findByPk(2)

    res.send(data)
}

const createVideo = (req, res) => {
    res.send("Create Video")

}

export {
    getVideo,
    createVideo
}