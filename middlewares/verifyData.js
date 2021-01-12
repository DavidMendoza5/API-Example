
const verifyData = async (req, res, next) => {
    try {
        const { userName, nombre, password } = req.body
        if(!userName || !nombre || !password) {
            throw new Error("Existen campos vacíos")
        }
        next()
    } catch(err) {
        next(err)
    }
}

module.exports = verifyData