const mongoose = require('mongoose')

module.exports = {
    isValidId,
}

function isValidId(id) {
    return mongoose.Types.ObjectId.isValid(id)
}
