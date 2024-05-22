const getVideo = (req, res) => {

    res.send("Get Video")
}

const createVideo = (req, res) => {
    res.send("Create Video")

}   

export {
    getVideo,
    createVideo
}