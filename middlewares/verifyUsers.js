const {getUserOnDB} = require('../database/users/user')

const verifyUser = async (req, res ,next) => {
    try {
        let userRepeated = await getUserOnDB({userName:req.body.userName}, next)
        if(userRepeated.length > 0) {
            throw new Error("Usuario duplicado")
        }
        next()
    
    } catch(err) {
        next(err)
    }
}

module.exports = verifyUser