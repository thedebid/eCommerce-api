const productService = require("./product.service");
const path = require('path');

// controller for saving product 

function createProduct(req, res, next) {
    if (req.fileError) {
        return next({
          msg: req.fileError,
          status: 400,
        });
      }
      console.log(req.files.image[0].filename);
      const data = req.body;
      if (req.files) {
        data.image =   req.files.image[0].filename;
        
        const images = []
        req.files.images.map ( (data) => {
        
            images.push(data.filename)
        
        })
        
         data.images = images;
      }
    // console.log(req.body)

    productService
      .save(data)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        next(err);
      });
  }


  //controller for getting all product data
    function getProductList(req, res, next) {
        productService
            .getAll()
            .then((result) => {
                if (!result.length) {
                    return next({
                        message: 'Product not found',
                        status: '500',
                    })
                }
                res.status(200).json(result)
            })
            .catch((err) => {
                next(err)
            })
    }

    //controller for getting product data by id
    function getProductById(req, res, next) {
        productService
            .findById(req.params.id)
            .then((result) => res.status(200).json(result))
            .catch((err) => next(err))
    }

    // update product details
function updateProduct(req, res, next) {
    productService
      .update(req.params.id, req.body)
      .then((result) => res.status(200).json(result))
      .catch((err) => next(err));
  }

  function deleteProduct(req, res, next) {
    productService
        .remove(req.params.id)
        .then(() =>
            res.status(200).json({
                message: 'Product deleted successfully',
            })
        )
        .catch((err) => next(err))
}


  module.exports = {
      createProduct,
      getProductList,
      getProductById,
      updateProduct,
      deleteProduct




  }
