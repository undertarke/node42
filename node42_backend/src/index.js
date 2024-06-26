
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

app.use(express.static(".")) // định vị lại đường dẫn load tài nguyên

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




import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';



const options = {
    definition: {
        info: {
            title: "api",
            version: "1.0.0"
        }
    },
    apis: ["src/swagger/swagger.js"]
}

const specs = swaggerJsDoc(options);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));




// connection, Code first, Database first, findAll(),create,update,destroy,....
// prisma ORM
// B1: yarn add prisma @prisma/client
// B2: yarn prisma init      => generate tự động cấu trúc prisma
// B3: update info .env and schema.prisma
// B4: yarn prisma db pull    => Database first
// B5: yarn prisma generate


// yarn add socket.io

import { createServer } from "http";
import { Server } from "socket.io";
import { join } from 'path'

const httpServer = createServer(app);
// đối tượng socket server
const io = new Server(httpServer, {
    cors: {
        origin: "*"
    }
});
let number = 0
io.on("connection", (socket) => {
    socket.on("join-room", () => {
        socket.join("room-2")
    })

    socket.on("fe-click", () => {
        // gửi data về tất cả client
        io.emit("nu-up", number++)
    })

    socket.on("send-mess", (message) => {
        io.to("room-2").emit("server-mess", message)
    })
});

httpServer.listen(8081); // port dành riêng cho realtime 



// graphql

// yarn add graphql express-graphql

import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'

let schema = buildSchema(`

        type User {
            id: ID
            hoTen: String
            email: String
            phone: Int
        }

        type VideoType{
            type_id: ID
            type_name: String
        }

        type Video {
            video_id:      ID             
            video_name:    String        
            thumbnail:     String        
            description:   String       
            views:         Int
            source:        String        
            user_id:       Int
            type_id:       Int

            video_type: VideoType
        }

        type Query {

            getUser: [User]
            
            getVideo( id: Int , name: String ) : [Video]
        }

        type Mutation {
            createUser: String
        }
    
    
`)







// Quy tắc 1: tên (phương thức) hàm == tên hàm bên schema đã khai báo
// Quy tắc 2: khi return phải giống kiểu dữ liệu đã định nghĩa ở schema
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
// table Video

let resolver = {
    // user : id, hoTen, email, phone
    getUser: () => {
        let modelUser = [{
            id: 1,
            hoTen: "a",
            email: "a@gmail.com",
            phone: 113
        },
        {
            id: 2,
            hoTen: "b",
            email: "b@gmail.com",
            phone: 113
        }]
        return modelUser
    },
    getVideo: async (argu) => {

        let id = argu.id

        // [{id,video_name}]
        return await prisma.video.findMany({
            where: {
                video_id: id

            },
            include: {
                video_type: true
            }
        })

    },

    createUser: () => {
    }
}

app.use("/graphql", graphqlHTTP({
    schema, // định nghĩa các đối tượng và tên hàm truy vấn (VD: abstract class)
    rootValue: resolver, // resolver =>  định nghĩa logic đổ dữ liệu cho các hàm bên schema
    graphiql: true // giao diện để thao tác với query Graphql
}))



