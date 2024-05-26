
// import mysql from 'mysql2'

// const connect = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "1234",
//     port: "3306",
//     database: "db_youtube"
// })

// yarn add sequelize

import { Sequelize } from 'sequelize'

const sequelize = new Sequelize("db_youtube", "root", "1234", {
    host: "localhost",
    port: "3306",
    dialect: "mysql"
})

export default sequelize

// yarn add sequelize-auto

// yarn sequelize auto -h localhost -d db_youtube -u root -x 1234 -p 3306 --dialect mysql -o src/models -l esm