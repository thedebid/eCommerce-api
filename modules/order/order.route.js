const express = require('express');
const router = express.Router();
const orderController = require ('./order.controller');

// route for order controller

router.route('/')
        .get(orderController.getOrderList)
        .post(orderController.createOrder);

router.route('/:id')
        .get(orderController.getOrderById)
        .put(orderController.updateOrder)
        .delete(orderController.deleteOrder)
        

module.exports = router;