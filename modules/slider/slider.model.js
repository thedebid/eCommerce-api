const mongoose = require('mongoose');
const sliderSchema = mongoose.Schema({
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
        default : 0
    }
})

const sliderModel = mongoose.model('slider',sliderSchema);
module.exports = sliderModel;