const fs = require('fs');
const path = require('path');
require('../../middlewares/uploader');
const productModel = require("./product.model");
const helper = require("./../../helpers/isValid")
//function for product
function save(data) {
  //console.log(data);
    var newProduct = new productModel({});
    newProduct.name = data.name;
    newProduct.desc = data.description;
    newProduct.image = data.image;
    newProduct.images =data.images;
    newProduct.price = data.price;
    newProduct.quantity = data.quantity;
    newProduct.category = data.categoryId;
    newProduct.subCategory = data.subCategoryId;
    newProduct.countInStock = data.countInStock;
    newProduct.isFeatured = data.isFeatured;
    newProduct.discount = data.discount;
    newProduct.dateCreated = data.dateCreated;
   
    return newProduct.save();
  }

  //function for getting all products data
function getAll() {
    return productModel.find({});
  }

  //function for getting product by id
async function findById(id) {
   if (!helper.isValidId(id)) throw "Invalid product id:" + ` ${id}`;
    const product = await productModel.findById(id);
    if (!product) throw "Product with" + ` ${id} ` + "not found";
    return product;
  }

  //function for updating product detail
async function update(id, data) {
    const product = await findById(id);
    // copy params to productDetail and save
    Object.assign(product, data);

    return product.save();
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
    remove

  }