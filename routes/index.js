const express = require('express')
const api = express.Router()

const userRoutes = require('./user')
const courseRoutes = require('./course')

api.use('/users', userRoutes)
api.use('/courses', courseRoutes)

module.exports = api