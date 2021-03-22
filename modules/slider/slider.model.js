const mongoose = require('mongoose');
const sliderModel = mongoose.Schema({
    image : {
        type : String,
        required : true,
    },

    category : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : 'category'

    },
    status : {
        type : Boolean,
        default : true
    }
})

const sliderModel = mongoose.model('slider',sliderModel);
module.exports = sliderModel;