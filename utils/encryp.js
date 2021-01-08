const bcrypt = require('bcrypt')

const encryptPassword = (password, saltRounds) => {
    const salt = bcrypt.genSaltSync(saltRounds)
    return bcrypt.hashSync(password, salt)
}

module.exports = encryptPassword