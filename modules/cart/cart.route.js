const express = require('express');
const router = express.Router();
const cartController = require ('./cart.controller');

// route for order controller

router.route('/')
        .get(cartController.getCartList)
        .post(cartController.createCart);

router.route('/:id')
        .get(cartController.getCartById)
        .put(cartController.updateCart)
        .delete(cartController.deleteCart)
        

module.exports = router;