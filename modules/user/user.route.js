const express = require("express");
const router = express.Router();
const userController = require("./user.controller");
const userDetailController = require("./userDetail.controller");
const upload = require("./../../middlewares/uploader");
// route to controllers

router
  .route("/")
  .get(userController.getUserList)
  .post(userController.createUser);

router
  .route("/detail")
  .post(upload.single("image"), userDetailController.createUserDetail);

router
  .route("/detail/:id")
  .get(userDetailController.userDetailFindById)
  .put(userDetailController.updateUserDetail);

//dynamic  endpoint always in end
router
  .route("/:id")
  .get(userController.getUserById)
  .delete(userController.deleteUser);

module.exports = router;
