const router = require("express").Router();
const userRoute = require("../modules/user/user.route");
const categoryRoute = require("../modules/category/category.route");
const authRoute = require("../modules/auth/auth.route");
const authorize = require("./../middlewares/authorize");

router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/auth", authRoute);

module.exports = router;
