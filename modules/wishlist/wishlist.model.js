const mongoose = require("mongoose");

const wishlistSchema = mongoose.Schema({
    product : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'product'
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },

    supplier : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'supplier'
    },
    status : {
        type : Boolean,
        default : 0 
    }
})

const wishlistModel = mongoose.model('wishlist',wishlistSchema);
module.exports = wishlistModel;