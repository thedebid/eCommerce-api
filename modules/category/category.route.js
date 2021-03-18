const express = require('express')
const router = express.Router()
const categoryController = require('./category.controller')


router
    .route('/')
    .get(categoryController.getCategoryList)
    .post(categoryController.createCategory)
router
    .route('/:id')
    .get(categoryController.getCategoryById)
    .delete(categoryController.deleteCategory)
    .put(categoryController.updateCategory)

    module.exports = router;
