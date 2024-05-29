// node --env-file=.env src/config/config.js

// node < 18 => dotenv
// node > 18 

export default {
    db_database: process.env.DB_DATABASE,
    db_user: process.env.DB_USER,
    db_password: process.env.DB_PASS,
    db_host: process.env.DB_HOST,
    db_port: process.env.DB_PORT,
    db_dialect: process.env.DB_DIALECT,
}