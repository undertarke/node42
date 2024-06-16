import Video from "../models/video.js"

import initModels from "../models/init-models.js"
import sequelize from "../models/connect.js"
import { responseSend } from "../config/response.js"

import { PrismaClient } from "@prisma/client"

let model = initModels(sequelize)

let modelPrisma = new PrismaClient()

const getVideo = async (req, res) => {

    // SELECT * FROM video
    let data = await model.video.findAll({
        include: ["type", "user"]
    })

    data = await modelPrisma.video.findMany({
        include: {
            video_comment: {
                include: {
                    users: true,
                }
            },
        }
    })

    //sequelize
    // model.video.create(newData)
    // model.video.update(newData, where)
    // model.video.destroy({ where })

    // // prisma
    // modelPrisma.video.create({ data: newData })
    // modelPrisma.video.update({ data: newData, where })
    // modelPrisma.video.delete({ where })

    responseSend(res, data, "Thành công !", 200)
}








const getVideoType = async (req, res) => {
    let data = await model.video_type.findAll()

    // res.send(data);
    responseSend(res, data, "Thành công !", 200)

}

const getVideoWithType = async (req, res) => {
    let { typeId } = req.params;


    let data = await model.video.findAll({
        where: {
            type_id: typeId
        }
    })

    // res.send(data)
    responseSend(res, data, "Thành công !", 200)

}



const createVideo = (req, res) => {
    // res.send("Create Video")

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

    // res.send({ data, listPage })

    responseSend(res, { data, listPage }, "Thành công !", 200)

}

const getVideoById = async (req, res) => {
    let { videoId } = req.params

    let data = await model.video.findByPk(videoId, {
        include: ["user"]
    })

    responseSend(res, data, "Thành công !", 200)
}

export {
    getVideo,
    createVideo,
    getVideoType,
    getVideoWithType,
    getVideoPage,
    getVideoById
}