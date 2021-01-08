const express = require('express')
const userControllers = require('../controllers/user')
const verifyUser = require('../middlewares/verifyUsers')

const api = express.Router()

api.post('/crearUsuario', verifyUser, userControllers.crearUsuario)
api.get('/obtenerUsuarios', userControllers.getUser)
api.get('/obtenerUsuario/:nombre', userControllers.getUserByName)

module.exports = api