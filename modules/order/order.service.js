
const orderModel = require('./order.model');
const helper= require("./../../helpers/isValid");

// function to save order
function save(data){ 
    const newOrder = new orderModel({
        user: data.user,
        product:data.product,
        quantity:data.quantity,
        supplier:data.supplier,
        paymentMethod:data.paymentMethod
         
    })
    return newOrder.save();
}

// function for getting all order details 
function getAll(){
    return orderModel.find({});
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

module.exports = {
    save,
    getAll,
    findById,
    update,
    remove
}
