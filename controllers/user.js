const {createUserInDB, getUserOnDB} = require('../database/users/user')
const encrypt = require('../utils/encryp')

const crearUsuario = async (req,res) => {
    try {
        const params = req.body
        let status = 0, message = {}

        params.password = encrypt(params.password, 10)
        if(!encrypt.length > 20) throw new Error("Error al encriptar la contraseña")

        const validateRegistered = (err, userRegistered) => {
            status = err ? 500:200
            message = err ? {message: 'Error al registrar el docente'}:{usuario: userRegistered}
            res.status(status).send(message)
        }
        await createUserInDB(params, validateRegistered)
    } catch(err) {
        res.status(500).send({ message: err.message })
    }
}

const getUser = async (req, res, next) => {
    try {
        let users = await getUserOnDB({},{password: false},next)
        res.status(200).send(users)
    } catch(err) {
        res.status(500).send({ message: err.message })
        next(err)
    }
}

const getUserByUserName = async (req, res, next) => {
    try {
        let params = req.params
        let user = await getUserOnDB({userName:params.userName}, next)
        res.status(200).send(user)
    } catch(err) {
        res.status(500).send({ message: err.message })
        next(err)
    }
}

const getUserByName = async (req, res, next) => {
    try {
        let params = req.params
        let user = await getUserOnDB({nombre: { $regex: new RegExp(params.nombre,'i')}}, next)
        res.status(200).send(user)
    } catch(err) {
        res.status(500).send({ message: err.message })
        next(err)
    }
}

module.exports = {
    crearUsuario,
    getUser,
    getUserByName,
    getUserByUserName
}