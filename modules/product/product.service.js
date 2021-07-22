const productModel = require("./product.model");
const supplierModel = require("../supplier/supplier.model");

const helper = require("./../../helpers/isValid");
const { db } = require("./product.model");
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
    const query = { countInStock: { $gt: 0 }};
    return productModel.find(query);
  }

// function for get limit product
function getLimitProduct(){
  // define an empty query document
  const query = { countInStock: { $gt: 0 }};
  const limit = 2;
  return productModel.find(query).sort( { "updatedAt": -1 }).limit(limit);

}

// function for getting 10 limit product
function limitProduct(){
  const query = { countInStock: { $gt: 0 }};
  const limit = 10;
  return productModel.find(query).sort( { "updatedAt": -1 }).limit(limit);
}

// function for getting random product
function getRandomProduct(){

  const query = { countInStock: { $gt: 0 }, status: 1};
  const product = productModel.find(query);
  //const product = productModel.find({"status": "1" });
  
  return product;
}
 
// function for get limit featured product
function getLimitFeaturedProduct(){
  // define an empty query 
  const query = { countInStock: { $gt: 0 }, isFeatured: 1}
  //const query = {"isFeatured": 1};
  const limit = 2;

  return productModel.find(query).limit(limit);

}



// function for get all featured product
function getAllFeaturedProduct(){
  // define an empty query document
  const query = { countInStock: { $gt: 0 }, isFeatured: 1};
 // const query = {"isFeatured": 1};
  return productModel.find(query);

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
  const query = { countInStock: { $gt: 0 }, supplier: id}
  //const query = { countInStock: { $gt: 0 }, isFeatured: 1}
   const product = await productModel.find(query);
   if (!product) throw "Supplier with" + ` ${id} ` + "not found";
   return product;
 }

 //search product
  async function search(name) {
  if(!name) throw "Please Enter product name";
  
    var regex = new RegExp(name,'i');
    const product = await productModel.find({name: regex, countInStock: { $gt: 0 }});
   
     if(product.length < 1 ) throw "Product with name"+ ` ${name} ` +" not Found";
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

  const product = await productModel.findOne({_id: id});
  const countInStock = product.countInStock;
  
  if(countInStock != null){
      const quantity = data.quantity;
      const stock = countInStock - quantity;

      const availableStock = {countInStock: stock}
 
    // copy params to userDetail and save
    Object.assign(product, availableStock);

    return product.save();
  }else{
    throw "Product " + ` ${product.name} ` + "not found in stock";
  }
  
}


// function for getting product by category

async function findByCategoryId(id) {
  if (!helper.isValidId(id)) throw "Invalid category id:" + ` ${id}`;
   const query = { countInStock: { $gt: 0 }, category: id}
   const product = await productModel.find(query);
   if (!product) throw "category with" + ` ${id} ` + "not found";
   return product;
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
    search,
    getLimitFeaturedProduct,
    getAllFeaturedProduct,
    limitProduct,
    getRandomProduct,
    findByCategoryId

  }