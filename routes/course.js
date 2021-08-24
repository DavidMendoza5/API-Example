const express = require('express')

const courseController = require('../controllers/course')

const apiCourse = express.Router()

apiCourse.post('/cursos', courseController.createCourse)
apiCourse.get('/cursos', courseController.getInformation)

module.exports = apiCourse