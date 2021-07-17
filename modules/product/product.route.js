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
    .get(productController.getProductBySupplierId)

router
    .route('/supplier-id/:id')
    .get(productController.getProductBySupplierId)
    
module.exports = router;