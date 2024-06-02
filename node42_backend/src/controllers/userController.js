import initModels from "../models/init-models.js"
import sequelize from "../models/connect.js"
import { responseSend } from "../config/response.js"

let model = initModels(sequelize)

const signUp = async (req, res) => {å
    let { email, password, fullName } = req.body

    // check email tồn tại => 403

    //
    let model = {
        email,
        pass_word: password, // mã hóa password => hash password
        full_name: fullName,


    }

    // model.user.create(model)

    // => 200
}

const login = async (req, res) => {
    let { email, password } = req.body

    let checkUser = await model.users.findOne({
        email
    })
    // []
    if (checkUser) {
        if (checkUser.pass_word == password) {
            let token = "";
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

export {
    signUp,
    login
}