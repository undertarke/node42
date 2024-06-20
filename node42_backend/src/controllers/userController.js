import initModels from "../models/init-models.js"
import sequelize from "../models/connect.js"
import { responseSend } from "../config/response.js"
import bcrypt from 'bcrypt'
import { createToken } from "../config/jwt.js"

let model = initModels(sequelize)

const signUp = async (req, res) => {
    let { email, password, fullName } = req.body
    // check email tồn tại => 403

    // yarn add bcrypt 
    let newUser = {
        email,
        pass_word: bcrypt.hashSync(password, 10), // mã hóa password => hash password một chiều
        full_name: fullName,
        avatar: "",
        face_app_id: "",
        role: "USER",
        refresh_token: ""
    }

    await model.users.create(newUser)
    // model.user.create(model)
    responseSend(res, "", "Thành công !", 200)

    // => 200
}

const login = async (req, res) => {
    let { email, password } = req.body


    let checkUser = await model.users.findOne({
        where: { email }
    })
    // []
    if (checkUser) {
        if (bcrypt.compareSync(password, checkUser.pass_word)) {

            // yarn add jsonwebtoken

            let token = createToken({ userId: checkUser.dataValues.user_id });

            // login thành công
            responseSend(res, token, "Thành công !", 200)
        } else {
            responseSend(res, "", "Sai mật khẩu !", 403)

        }

    } else {
        // sai mật khẩu hoặc email
        responseSend(res, "", "Sai Email !", 403)

    }

}

const loginFacebook = async (req, res) => {
    let { face_app_id, name, email } = req.body

    // check id 

    let checkUser = await model.users.findOne({
        where: {
            face_app_id
        }
    })

    if (!checkUser) {
        //signUp

        let newUser = {
            email,
            pass_word: "",
            full_name: name,
            avatar: "",
            face_app_id,
            role: "USER",
            refresh_token: ""
        }

        await model.users.create(newUser)

        // lấy được user_id mới
        checkUser = await model.users.findOne({
            where: {
                face_app_id
            }
        })
    }

    let token = createToken({ userId: checkUser.dataValues.user_id });

    // login thành công
    responseSend(res, token, "Thành công !", 200)

}

const getUser = async (req, res) => {
    let data = await model.users.findAll()
    responseSend(res, data, "Thành công !", 200)
}

export {
    signUp,
    login,
    loginFacebook,
    getUser
}
