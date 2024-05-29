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
    // let data2 = await model.video.findOne({
    //     where: {
    //         video_id: 2
    //     }
    // })
    // // tìm kiếm theo primary key
    // let data3 = await model.video.findByPk(2)

    let data = await model.video.findAll({
        include: ["type", "user"]
    })
    res.send(data);
}

const getVideoType = async (req, res) => {
    let data = await model.video_type.findAll()

    res.send(data);
}

const getVideoWithType = async (req, res) => {
    let { typeId } = req.params;


    let data = await model.video.findAll({
        where: {
            type_id: typeId
        }
    })

    res.send(data)
}



const createVideo = (req, res) => {
    res.send("Create Video")

}

const getVideoPage = async (req, res) => {
    let { page } = req.params
    let pageSize = 3
    let index = (page - 1) * pageSize

    // SELECT * FROM video LIMIT index , pageSize

    let data = await model.video.findAll({
        offset: index,
        limit: pageSize
    })

    let listItem = await model.video.count();
    let listPage = Math.ceil(listItem / pageSize)
    
    res.send({ data, listPage })
}

export {
    getVideo,
    createVideo,
    getVideoType,
    getVideoWithType,
    getVideoPage
}