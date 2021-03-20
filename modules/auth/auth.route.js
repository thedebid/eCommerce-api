const express = require("express");
const router = express.Router();

router.route("/login").post(userController.userAuthenticate);

module.exports = router;
