const customerService = require("./customer.service");

//controller for saving customer data
function createCustomer(req, res, next) {
 // console.log(req);
  customerService
    .save(req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      next(err);
    });
}

//controller for getting all Customer data
function getCustomerList(req, res, next) {
  customerService
    .getAll()
    .then((result) => {
      if (!result.length) {
        return next({
          message: "Customer not found",
          status: "500",
        });
      }
      res.status(200).json(result);
    })
    .catch((err) => {
      next(err);
    });
}

//controller for getting Customer data by id
function getCustomerById(req, res, next) {
  customerService
    .findById(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => next(err));
}

function deleteCustomer(req, res, next) {
  customerService
    .remove(req.params.id)
    .then(() =>
      res.status(200).json({
        message: "Customer deleted successfully",
      })
    )
    .catch((err) => next(err));
}

function updateCustomer(req, res, next){ 
  customerService.update(req.params.id, req.body)
  .then((result)=> res.status(200).json(result))
  .catch((err)=>next(err));
}


module.exports = {
  createCustomer,
  getCustomerList,
  getCustomerById,
  deleteCustomer,
  updateCustomer
};
