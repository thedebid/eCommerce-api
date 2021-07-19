const express = require ('express');
const router = express.Router();
const supplierController = require('./supplier.controller');

// route for supplier controller

router.route('/')
        .get(supplierController.getSupplierList)
        .post(supplierController.createSupplier);

// endpoint for getting limit supplier
router.route('/supplier-limit')
        .get(supplierController.getSupplierLimit);

router.route('/:id')
        .get(supplierController.getSupplierByID)
        .delete(supplierController.deleteSupplier)
        .put(supplierController.updateSupplier)
        
// endpoint for getting data of product and supplier by product id
router.route('/get-populate/:id')
        .get(supplierController.getPopulate)






module.exports = router;