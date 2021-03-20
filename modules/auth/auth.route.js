const express = require("express");
const router = express.Router();
const authController = require("./auth.cotroller");

router.route("/login").post(authController.userAuthenticate);
router.route("/register").post(authController.userRegister);
router.route("/forgotpassword").post(authController.forgotPassword);

module.exports = router;
