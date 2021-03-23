const express = require('express')
const router = express.Router()

const productController = require('./product.controller')
const productModel = require('./product.model')

// route to controllers

router
    .route('/')
    .post(productController.createProduct)
    .get(productController.getProductList)

router
    .route('/:id')
    .get(productController.getProductById)
    .put(productController.updateProduct)
    .delete(productController.deleteProduct)
    


module.exports = router;