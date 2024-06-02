
export const responseSend = (res, data, message, code) => {
    res.status(code).json({
        statusCode: code,
        content: data,
        message,
        date: new Date()
    })
}