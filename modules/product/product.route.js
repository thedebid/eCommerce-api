const express = require('express')
const router = express.Router()

const productController = require('./product.controller')
const productModel = require('./product.model')

// route to controllers

router
    .route('/')
    .post(productController.createProduct)
    .get(productController.getProductList)

// endpoint for getting 2 latest product 
router.route('/get-limit-product').get(productController.getLimitProduct)

// endpoint for getting product randomly
router.route('/random-product').get(productController.randomProduct);

// endpoint for getting 10 latest product 
router.route('/limit-product').get(productController.limitProduct)

// endpoint for getting featured product limit
router.route('/get-featured-product').get(productController.getLimitFeatured)

// endpoint for getting all featured product
router.route('/featured').get(productController.getAllFeatured)

// endpoint for search
router.route('/search-product/:search').get(productController.searchProduct);

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