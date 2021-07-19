const orderService = require('./order.service');

// controller for getting orders details
function getOrderList(req,res,next){
    orderService.getAll()
        .then((result) => {
            if (!result.length){
                return next({
                    message : 'Order not found!',
                    status : '400',
                })
            }
            res.status(200).json(result);
        })
        .catch((err)=> {
            next(err)
        })
}

// controller for getting order detail by id
function getOrderById(req,res,next){
    orderService.findById(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => next(err))
}

// controller for getting order detail by id
function getOrderByUserId(req,res,next){
    orderService.findByUserId(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => next(err))
}



// controller for saving order details
function createOrder(req,res,next){
    orderService.save(req.body)
    .then((result) => res.status(200).json({
        result,
        message:"Order placed successfully!"
    }))
    .catch((err) => next(err))
}

// controller for updating order details
function updateOrder(req,res,next){
    orderService.update(req.params.id,req.body)
    .then((result) => res.status(200).json(result))
    .catch((err) => next(err));
}

// controller for deleting order 
function deleteOrder(req,res,next){
    orderService.remove(req.params.id)
    .then(() => 
    res.status(200).json({
        message: "Order deleted successfully"
    }))
    .catch((err) => next(err))
}
module.exports = {
    createOrder,
    getOrderById,
    getOrderList,
    updateOrder,
    deleteOrder,
    getOrderByUserId,

}