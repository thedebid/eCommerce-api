const mongoose  = require('mongoose');
const reviewSchema = mongoose.Schema({
    message : {
        type : String
    },
    user :{
        type : mongoose.Schema.Types.ObjectID,
        ref : 'user'
    },
    rating : {
        type : Number
    },
    status : {
        type : Boolean,
        default : 0
    }
})

const reviewModel = mongoose.model('review',reviewSchema);
module.exports = reviewModel;