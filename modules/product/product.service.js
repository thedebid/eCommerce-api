const productModel = require("./product.model");
const supplierModel = require("../supplier/supplier.model");

const helper = require("./../../helpers/isValid")
//function for product
function save(data) {
    var newProduct = new productModel({});
    newProduct.name = data.name;
    newProduct.desc = data.description;
    newProduct.image = data.image;
    newProduct.images = data.images;
    newProduct.brand = data.brand;
    newProduct.price = data.price;
    newProduct.quantity = data.quantity;
    newProduct.category = data.categoryId;
    newProduct.subCategory = data.subCategoryId;
    newProduct.countInStock = data.countInStock;
    newProduct.isFeatured = data.isFeatured;
    newProduct.discount = data.discount;
    newProduct.supplier = data.supplierId;

    return newProduct.save();
  }

  //function for getting all user data
function getAll() {
    return productModel.find({});
  }

// function for get limit product
function getLimitProduct(){
  // define an empty query document
  const query = {};
  const limit = 2;
  return productModel.find(query).sort( { "updatedAt": -1 }).limit(limit);

}

  //function for getting product by id
async function findById(id) {
   if (!helper.isValidId(id)) throw "Invalid product id:" + ` ${id}`;
    const product = await productModel.findById(id);
    if (!product) throw "Product with" + ` ${id} ` + "not found";
    return product;
  }

  //function for getting product by supplier id
async function findBySupplierId(id) {
  if (!helper.isValidId(id)) throw "Invalid supplier id:" + ` ${id}`;
   const product = await productModel.find({ supplier: id});
   if (!product) throw "Supplier with" + ` ${id} ` + "not found";
   return product;
 }

  //function for updating product detail
async function update(id, data) {
    const product = await findById(id);
    // copy params to userDetail and save
    Object.assign(product, data);

    return product.save();
  }

  //function for substract in stock 
async function minusStock(id, data) {
  console.log("data: ",data);

  const product = await productModel.findOne({_id: id});
  const countInStock = product.countInStock;
  
  if(countInStock == !null){
    const quantity = data.quantity;
    const stock = countInStock - quantity;

    const availableStock = {countInStock: stock}

  // copy params to userDetail and save
   Object.assign(product, availableStock);

   return product.save();
  }else{
    throw "Product is not Available.";
  }
   

  
  console.log("Stock available",stock);

  
}

  //function for deleting product
    async function remove(id) {
        const product = await findById(id);
        await product.remove(id);
    }
  
  module.exports = {
    save,
    getAll,
    findById,
    update,
    remove,
    findBySupplierId,
    getLimitProduct,
    minusStock,

  }