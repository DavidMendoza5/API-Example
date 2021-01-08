const userSchema = require('../../model/user')

const createUserInDB = async (params, validateRegistered) => {
    try {
        const user = new userSchema(params)
        await user.save(validateRegistered)
    } catch(err) {
        console.log(err)
    }

}

const getUserOnDB = async (filtros, next) => {
    try {
        const users = await userSchema.find(filtros, { password:false }, (err, lisOfUsers) => {
            if(err) throw err
            return lisOfUsers
        })
        return users
    } catch(err) {
        console.log(err)
        next(err)
    }
}

module.exports = {
    createUserInDB,
    getUserOnDB
}