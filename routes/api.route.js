const router = require("express").Router();

const userRoute = require("../modules/user/user.route");
const categoryRoute = require("../modules/category/category.route");
const supplierRoute = require('../modules/supplier/supplier.route');
const orderRoute = require('../modules/order/order.route');
const notificationRoute = require("../modules/notification/notification.route");
const productRoute = require("../modules/product/product.route");
const wishlistRoute = require("../modules/wishlist/wishlist.route");
const sliderRoute = require("../modules/slider/slider.route")

const authRoute = require("../modules/auth/auth.route");

const authorize = require("./../middlewares/authorize");

const reviewRoute = require("../modules/review/review.route");


router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use ('/supplier', supplierRoute)
router.use("/auth", authRoute);
router.use("/notification", notificationRoute);
router.use("/product", productRoute);
router.use("/order",orderRoute);
router.use("/wishlist", wishlistRoute);
router.use("/slider", sliderRoute);
router.use("/review", reviewRoute);


module.exports = router;
