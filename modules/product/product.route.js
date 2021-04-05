const express = require('express')
const router = express.Router()

const productController = require('./product.controller')
const productModel = require('./product.model');
const upload = require('../../middlewares/uploader');

// route to controllers

router
    .route('/')
    .post( upload.fields([{name: 'image', maxCount: 1},
    {name: 'images', maxCount: 5}]),
    productController.createProduct)
    .get(productController.getProductList)

router
    .route('/:id')
    .get(productController.getProductById)
    .put(productController.updateProduct)
    .delete(productController.deleteProduct)
    


module.exports = router;