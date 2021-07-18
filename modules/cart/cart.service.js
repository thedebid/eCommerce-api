
const cartModel = require('./cart.model');
const helper= require("./../../helpers/isValid");

// function to save cart
function save(data){ 
    const newCart = new cartModel({
        user: data.userId,
        product:data.productId,
           
    })
    return newCart.save();
}

// function for getting all cart details 
function getAll(){
    return cartModel.find({});
}

//function for getting all product and user data using populate bu cart id
function getProductUser(id){
    
    //const product = productModel.find({});
    return cartModel.find({_id: id}).populate("user").populate("product");
   
};

// function for getting a cart details by id
async function findById(id){
const cart = await cartModel.findById(id);
if(!cart) throw "cart not found";
return cart;
}

// function for updating cart
async function update(id,data){
    const cart = await findById(id);
    Object.assign(cart, data);
   
    return cart.save();
}

// function for deleting cart
async function remove(id){
    const cart = await findById(id);
    return cart.remove()
}

module.exports = {
    save,
    getAll,
    findById,
    update,
    remove,
    getProductUser,
}
