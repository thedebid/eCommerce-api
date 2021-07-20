
const orderModel = require('./order.model');
const cartService = require('../cart/cart.service');
const helper= require("./../../helpers/isValid");

// function to save order
function save(data){ 
   //  console.log(JSON.parse(data)); 
    console.log(data); 

    const newOrder = new orderModel({
        user: data.userId,
        product:data.productId,
        quantity:data.quantity,
        supplier:data.supplierId,
       // paymentMethod:data.paymentMethod    
    })
    // if(newOrder.save() == true){
    //     cartService.remove(data.userId);
        return newOrder.save();
    // }
    //return newOrder.save();
}

// function for getting all order details 
function getAll(){
    return orderModel.find({});
}

async function findByUserId(id) {
    if (!helper.isValidId(id)) throw "Invalid user id:" + ` ${id}`;
    const order = await orderModel.find({user: id}).populate("user").populate("product").populate("supplier");
    if (!order) throw "User with" + ` ${id} ` + "not found";
    return order;
  }

// function for getting a order details by id
async function findById(id){
const order = await orderModel.findById(id);
if(!order) throw "Order not found";
return order;
}

// function for updating order
async function update(id,data){
    const order = await findById(id);
    Object.assign(order, data);
   
    return order.save();
}

// function for deleting product
async function remove(id){
    const order = await findById(id);
    return order.remove()
}

// function for getting order details by user details
async function findByUserId(id) {
    if (!helper.isValidId(id)) throw "Invalid user id:" + ` ${id}`;
    const order = await orderModel.find({user: id}).populate("user").populate("product").populate("supplier");
    if (!order) throw "User with" + ` ${id} ` + "not found";
    return order;
  }


module.exports = {
    save,
    getAll,
    findById,
    update,
    remove,
    findByUserId,
   
}
