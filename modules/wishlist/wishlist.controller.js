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

  //controller for getting all wishlist data
function getWishList(req, res, next) {
  wishlistService
      .getAll()
      .then((result) => {
          if (!result.length) {
              return next({
                  message: 'Wishlist not found',
                  status: '500',
              })
          }
          res.status(200).json(result)
      })
      .catch((err) => {
          next(err)
      })
}


  //controller for getting wishlist by id
function getWishlistById(req, res, next) {
  wishlistService
      .findById(req.params.id)
      .then((result) => res.status(200).json(result))
      .catch((err) => next(err))
}

function deleteWishlist(req, res, next) {
  wishlistService
      .remove(req.params.id)
      .then(() =>
          res.status(200).json({
              message: 'Wishlist deleted successfully',
          })
      )
      .catch((err) => next(err))
}

// update wishlist details
function updateWishlist(req, res, next) {
  wishlistService
    .update(req.params.id, req.body)
    .then((result) => res.status(200).json(result))
    .catch((err) => next(err));
}

  module.exports = {
      createWishlist,
      getWishList,
      getWishlistById,
      deleteWishlist, 
      updateWishlist,
  
  }
  