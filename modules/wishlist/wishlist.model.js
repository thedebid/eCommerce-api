const mongoose = require("mongoose");

const wishlistSchema = mongoose.Schema({
    product : {
        type : mongoose.SchemaType.ObjectId,
        ref : 'product'
    },
    user : {
        type : mongoose.SchemaType.ObjectId,
        ref : 'user'
    },
    status : {
        type : Boolean,
        default : 0 
    }
})

const wishlistModel = mongoose.model('wishlist',wishlistSchema);
module.exports = wishlistModel;