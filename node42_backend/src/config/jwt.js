import jwt from 'jsonwebtoken'

// create token
export const createToken = (data) => {

    // payload, signature, header
    // 2 tham số => string, object, Buffer
    // 3 tham số: (data) => object

    return jwt.sign({ data }, "BI_MAT", { expiresIn: "5m" })
}

// verify token
export const verifyToken = (token) => {
    // BI_MAT
}

// decode token
export const decodeToken = (token) => {
    return jwt.decode(token)
}
