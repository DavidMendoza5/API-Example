const express = require('express')
const userControllers = require('../controllers/user')
const verifyUser = require('../middlewares/verifyUsers')

const api = express.Router()

api.post('/crearUsuario', verifyUser, userControllers.crearUsuario)
api.get('/obtenerUsuarios', userControllers.getUser)
api.get('/obtenerUsuario/busqueda/:nombre', userControllers.getUserByName)
api.get('/obtenerUsuario/:userName', userControllers.getUserByUserName)

module.exports = api