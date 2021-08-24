const moongose = require('mongoose')

const schema = moongose.Schema

let CourseSchema = new schema ({
    courseName: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = moongose.model('course', CourseSchema)