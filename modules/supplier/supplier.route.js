const express = require ('express');
const router = express.Router();
const supplierController = require('./supplier.controller');

// route for supplier controller

router.route('/')
        .get(supplierController.getSupplierList)
        .post(supplierController.createSupplier);

router.route('/:id')
.get(supplierController.getSupplierByID)
.delete(supplierController.deleteSupplier)
.put(supplierController.updateSupplier)






module.exports = router;