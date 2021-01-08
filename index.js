const config = require('./config/config')
const app = require('./app')
const mongoose = require('mongoose')

mongoose.connect(config.conexion, { useNewUrlParser:true, useCreateIndex: true, useUnifiedTopology: true}, (err, res) => {
    if(err) {
        throw err
    } else {
        console.log('Mongo connected')
    }
    app.listen(config.port, () => {
        console.log(`Running on http://localhost:${config.port}`)
    })
})