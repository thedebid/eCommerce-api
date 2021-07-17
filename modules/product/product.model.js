

 const mongoose = require('mongoose');

 const productSchema = mongoose.Schema({
     name :{
         type:String,
         required : true
     },
    //  supplier:{
    //      type : mongoose.SchemaTypes.ObjectId,
    //      ref : 'Supplier'
    //  },
     desc : {
         type : String,
         required : true
     },
    //  richDesc : {
    //      type : String,
    //  },
     image: {
         type : String,
         required : true
     },
     images: {
         type : String,
     },
     brand : String,

     price :{
         type : Number,
         required : true
     },
     
     quantity : Number,
     
     category : {
         type : mongoose.SchemaTypes.ObjectId,
         ref: 'category'
     }, 
     
     subCategory: {
         type : mongoose.SchemaTypes.ObjectId,
         ref : 'subCategory'
     },

     
     countInStock : Number,
     //
 
     isFeatured : {
         type: Boolean,
         default: 0
     },
     discount : {
         type : Number,
         default : ""
     },
     status : {  
         type :Boolean,
         default : 0
     },

     supplier: {
        type : mongoose.SchemaTypes.ObjectId,
        ref : 'supplier'
    },
 
 },{
 timestamps:true
 }
 )
 
  const productModel = mongoose.model('product',productSchema);
  module.exports = productModel;