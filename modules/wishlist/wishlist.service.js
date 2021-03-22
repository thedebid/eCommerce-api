const wishlistModel = require("./wishlist.model");

//function for saving wishlist
function save(data) {
  var newWishlist = new wishlistModel({});

  newWishlist.product = data.productId;
  newWishlist.user = data.userId;
  return newWishlist.save();
}
  module.exports = {
      save,
 
  }