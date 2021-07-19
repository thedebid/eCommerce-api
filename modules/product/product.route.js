const express = require('express')
const router = express.Router()

const productController = require('./product.controller')
const productModel = require('./product.model')

// route to controllers

router
    .route('/')
    .post(productController.createProduct)
    .get(productController.getProductList)

// endpoint for getting latest product
router.route('/get-limit-product').get(productController.getLimitProduct)

router
    .route('/:id')
    .get(productController.getProductById)
    .put(productController.updateProduct)
    .delete(productController.deleteProduct)

router
    .route('/supplier-id/:id')
    .get(productController.getProductBySupplierId)

// endpoint to substract countInStock when sales by product id
router
    .route('/count-in-stock/:id')
    .put(productController.countInStock)
    

    
module.exports = router;