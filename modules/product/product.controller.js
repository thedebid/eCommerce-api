const productService = require("./product.service");

// controller for saving product 

function createProduct(req, res, next) {
    productService
      .save(req.body)
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

    //controller for getting limit product data
    function getLimitProduct(req, res, next) {
        productService
            .getLimitProduct()
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


    // get product by supplier id
   function getProductBySupplierId(req, res, next) {
    productService
        .findBySupplierId(req.params.id)
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
      deleteProduct,
      getProductBySupplierId,
      getLimitProduct,




  }
