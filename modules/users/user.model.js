const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
    status:{
        type:Number,
        default:0
    }
},{
    timestamp:true
})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel