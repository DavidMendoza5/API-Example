require('dotenv').config()

const config = {
    port: process.env.PORT,
    conexion: process.env.DB_CONNECTION,
    host: `http://localhost:${process.env.PORT}/`
}

module.exports = config;