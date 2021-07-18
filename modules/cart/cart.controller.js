const cartService = require('./cart.service');

// controller for getting cart details
function getCartList(req,res,next){
    cartService.getAll()
        .then((result) => {
            if (!result.length){
                return next({
                    message : 'Cart not found!',
                    status : '400',
                })
            }
            res.status(200).json(result);
        })
        .catch((err)=> {
            next(err)
        })
}

//controller for getting data of product and user by cart id using populate
function getProductUserById(req, res, next) {
    cartService
        .getProductUser(req.params.id)
        .then((result) => { 
            if (!result.length) {
                return next({
                    message: 'Cart not found',
                    status: '400',
                })
            }
            res.status(200).json(result);
        })
        .catch((err) => {
            next(err)
        })
}

//controller for getting data of product by user id using populate
function getProductByUserId(req, res, next) {
    cartService
        .getProduct(req.params.id)
        .then((result) => { 
            if (!result.length) {
                return next({
                    message: 'User not found',
                    status: '400',
                })
            }
            res.status(200).json(result);
        })
        .catch((err) => {
            next(err)
        })
}


// controller for getting cart detail by id
function getCartById(req,res,next){
    cartService.findById(req.params.id)
    // .then((result) => {
    //     if(!result.length){
    //         return next ({
    //             message : `No cart found with Id :${req.params.id}`,
    //             status: '400'
    //         })
    //     }
    // })
    // .catch((err) => next(err));

    .then((result) => res.status(200).json(result))
    .catch((err) => next(err))
}

// controller for saving cart details
function createCart(req,res,next){
    console.log("create cart");
    cartService.save(req.body)
    .then((result) => res.status(200).json({
        result,
        message:"Cart placed successfully!"
    }))
    .catch((err) => next(err))
}

// controller for updating order details
function updateCart(req,res,next){
    cartService.update(req.params.id,req.body)
    .then((result) => res.status(200).json(result))
    .catch((err) => next(err));
}

// controller for deleting cart 
function deleteCart(req,res,next){
    cartService.remove(req.params.id)
    .then(() => 
    res.status(200).json({
        message: "Cart deleted successfully"
    }))
    .catch((err) => next(err))
}
module.exports = {
    createCart,
    getCartById,
    getCartList,
    updateCart,
    deleteCart,
    getProductUserById,
    getProductByUserId,

}