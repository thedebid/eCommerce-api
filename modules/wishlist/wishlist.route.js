const express = require('express')
const router = express.Router()
const wishlistController = require('./wishlist.controller')


// route to wishlist controller

router
.route('/')
.post(wishlistController.createWishlist)
.get(wishlistController.getWishList)


router
.route('/:id')
.get(wishlistController.getWishlistById)
.delete(wishlistController.deleteWishlist)
.put(wishlistController.updateWishlist)


module.exports = router;
