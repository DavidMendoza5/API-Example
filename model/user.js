const moongose = require('mongoose')

const schema = moongose.Schema

let UserSchema = new schema ({
    nombre: {
        type: String
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = moongose.model('user', UserSchema)