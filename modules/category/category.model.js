const mongoose = require('mongoose')
const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    icon: {
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

const categoryModel = mongoose.model('category', categorySchema)
module.exports = categoryModel