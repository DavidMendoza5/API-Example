const moongose = require('mongoose')

const schema = moongose.Schema

let UserSchema = new schema ({
    userName: {
        type: String,
        required: true
    },
    nombre: {
        type: String
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = moongose.model('user', UserSchema)