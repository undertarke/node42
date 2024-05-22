
// package.json
// node_moudles

// Ctrl + J
// B1: yarn init => enter, enter .... => tạo ra file package.json
// B2: thêm type: "module" trong package.json => sử dụng được ES module (export, import)

// B3: thêm script start trong package.json


// B4: yarn add express

import express from 'express'
import rootRouter from './routes/rootRouter.js'
import cors from 'cors'

const app = express()

// middleware => trước khi nhận request từ FE
app.use(express.json())

// mở chặn CORS => yarn add cors
app.use(cors({
    origin: "*" // tất cả domain truy cập
}))

// khởi tạo server BE chạy bằng framework Express
app.listen(8080)

app.use(rootRouter)


// chỉ sử dụng môi trường Developer
// yarn add nodemon => watching => auto restart server
// node v18 trở lên => node --watch index.js
// ctrl + C => tắt server


// GET: /demo
// :id: truyền động params từ FE
// lưu ý: endpoint phải khai báo đầy đủ nếu có params
// endpoint => viết thường cách nhau bởi gạch ngang (ko phân biệt hoa thường). VD: thong-tin-user
// dữ liệu lấy từ query hay params đều là kiểu string
app.get("/demo/:id/:hoTen", (request, response) => {

    // - nhận từ URL
    // query string: localhost:8080/demo?id=1&hoTen=long
    // let id = request.query.id;
    // let hoTen = request.query.hoTen
    // ES6: destructering (bốc tách phần tử)
    // let { id, hoTen } = request.query;

    // query params: localhost:8080/demo/1/long
    // let id2 = request.params.id
    // let hoTen2=request.params.hoTen
    let { id, hoTen } = request.params;

    // - nhận bằng json
    // body
    let { email, phone, diaChi } = request.body;

    // ES6: object literal => lượt bỏ tên biến trùng với tẹn thuộc tính

    //status code: 100 - 599

    response.status(202).send(
        {
            id,
            hoTen,
            email, phone, diaChi
        }
    ) // bất kỳ kiểu data gì trừ number
})


// chuỗi kết nối CSDL: host, username, password, port, dialect
// truy vấn dữ liệu: CRUD table

// yarn add mysql2


// truy vấn table nguoi_dung
// ORM
// localhost:8080/video/get-video




/* 
    Model: object => Sequelize ORM
   
    Controller: xử lý logic, tính toán, truy xuất CSDL,...
    
    Router: quản lý API, quản lý đối tượng endpoint

*/


import mysql from 'mysql2'

const connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    port: "3306",
    database: "db_youtube"
})