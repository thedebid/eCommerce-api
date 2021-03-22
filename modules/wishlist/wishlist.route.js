const express = require('express')
const router = express.Router()
const wishlistController = require('./wishlist.controller')


// route to wishlist controller

router
.route('/')
.post(wishlistController.createWishlist)

module.exports = router;
