import jwt from 'jsonwebtoken'

// create token
export const createToken = (data) => {

    // payload, signature, header
    // 2 tham số => string, object, Buffer
    // 3 tham số: (data) => object

    return jwt.sign({ data }, "BI_MAT", { expiresIn: "50m" })
}

// verify token
// BI_MAT
// 3 Lỗi
// 1/ token không hợp lệ
// 2/ token hết hạn
// 3/ token sai khóa bí mật

// không lỗi == null
// có lỗi là != null

export const verifyToken = token => jwt.verify(token, "BI_MAT", error => error)




// decode token
export const decodeToken = (token) => {
    return jwt.decode(token)
}

export const middleToken = (req, res, next) => {

    let { token } = req.headers
    let error = verifyToken(token)
    if (error)
        // token không hợp lệ
        res.status(401).send(error.message)
    else
        // token hợp lệ
        next()


}