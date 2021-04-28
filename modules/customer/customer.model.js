const mongoose = require('mongoose');
const customerSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    status:{
        type:Number,
        default:0
    }
},{
    timestamps: true,
})

const customerModel = mongoose.model('customer', customerSchema)
module.exports = customerModel;