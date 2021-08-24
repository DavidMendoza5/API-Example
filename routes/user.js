const express = require('express')
const userControllers = require('../controllers/user')
const verifyUser = require('../middlewares/verifyUsers')
const verifyData = require('../middlewares/verifyData')

const api = express.Router()

api.post('/crearUsuario', verifyData, verifyUser, userControllers.crearUsuario)
api.get('/obtenerUsuarios', userControllers.getUser)
api.get('/obtenerUsuario/busqueda/:nombre', userControllers.getUserByName)
api.get('/obtenerUsuario/:userName', userControllers.getUserByUserName)
api.get('/usuarios', userControllers.getInformation)

module.exports = api