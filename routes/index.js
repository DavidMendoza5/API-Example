const express = require('express')
const api = express.Router()

const userRoutes = require('./user')

api.use('/users', userRoutes)

module.exports = api