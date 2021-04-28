const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({

    user : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : 'user'
    },
    product : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : 'product',
    },
    quantity : {
        type : Number,
        required : true,
    },
    // paymentMethod : {

    // },
    supplier : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : 'supplier'
    },

    status : {
        type : Boolean,
        default : 1

    }
    // orderDate:{
    //     type : Date,
    //     default : Date.now()
    // }


},
{
    timestamps:true
    }
)

const orderModel = mongoose.model('order',orderSchema);
module.exports = orderModel;