const wishlistModel = require("./wishlist.model");
const helper = require("../../helpers/isValid")

//function for saving wishlist
function save(data) {
  var newWishlist = new wishlistModel({});

  newWishlist.product = data.productId;
  newWishlist.user = data.userId;
  newWishlist.status = data.status;
  newWishlist.supplier = data.supplierId;
  return newWishlist.save();
}

//function for getting wishlist by id
async function findById(id) {
  if (!helper.isValidId(id)) throw "Invalid wishlist id:" + ` ${id}`;
  const wishlist = await wishlistModel.findById(id);
  if (!wishlist) throw "Wishlist with" + ` ${id} ` + "not found";
  return wishlist;
}

//function for getting wishlist by user id
async function findByUserId(id) {
  if (!helper.isValidId(id)) throw "Invalid wishlist id:" + ` ${id}`;
  const wishlist = await wishlistModel.find({user: id}).populate("user").populate("product").populate("supplier");
  if (!wishlist) throw "User with" + ` ${id} ` + "not found";
  return wishlist;
}

//function for getting all wishlist data
function getAll() {
  return wishlistModel.find({});
}

//function for deleting wishlist
async function remove(id) {
  const wishlist = await findById(id);
  await wishlist.remove(id);
}

//function for updating wishlist
async function update(id,data){
 
  if (!helper.isValidId(id)) throw `Invalid wishlist id : ${id}`;
  else{
      const wishlist = await wishlistModel.findByIdAndUpdate(id);
      Object.assign(wishlist, data);
      console.log("wishlist: ", data);
      return wishlist.save();
}
}

  module.exports = {
      save,
      findById, 
      getAll,
      remove,
      update,
      findByUserId,
  }