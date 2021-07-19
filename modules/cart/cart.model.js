const mongoose = require('mongoose')
const cartSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },

    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        reqyuired: true
    },
    
},
{
    timestamps: true,
}
);

const cartModel = mongoose.model("cart", cartSchema);
module.exports = cartModel;