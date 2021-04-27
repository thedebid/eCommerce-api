const express = require("express");
const router = express.Router();
const customerController = require("./customer.controller");
const customerDetailController = require("./customerDetail.controller");
const upload = require("./../../middlewares/uploader");
// route to controllers

router
  .route("/")
  .get(customerController.getCustomerList   )
  .post(customerController.createCustomer);

router
  .route("/detail")
  .post(upload.single("image"), customerDetailController.createCustomerDetail);

router
  .route("/detail/:id")
  .get(customerDetailController.CustomerDetailFindById)
  .put(customerDetailController.updateCustomerDetail);

//dynamic  endpoint always in end
router
  .route("/:id")
  .get(customerController.getCustomerById)
  .put(customerController.updateCustomer)
  .delete(customerController.deleteCustomer);

module.exports = router;
