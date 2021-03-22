const wishlistService = require("./wishlist.service")

// controller for saving wishlist
function createWishlist(req, res, next) {
    wishlistService
      .save(req.body)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        next(err);
      });
  }

  module.exports = {
      createWishlist,
      
  }
  