const customerDetailService = require("./customerDetail.service");

// controller for saving customer details
function createCustomerDetail(req, res, next) {
  if (req.fileError) {
    return next({
      msg: req.fileError,
      status: 400,
    });
  }
  const data = req.body;
  if (req.file) {
    data.image = req.file.filename;
  }
  CustomerDetailService
    .save(data)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      next(err);
    });
}

// update customer details
function updateCustomerDetail(req, res, next) {
  CustomerDetailService
    .update(req.params.id, req.body)
    .then((result) => res.status(200).json(result))
    .catch((err) => next(err));
}

// find customer details
function CustomerDetailFindById(req, res, next) {
  CustomerDetailService
    .findById(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => next(err));
}

module.exports = {
  createCustomerDetail,
  updateCustomerDetail,
  CustomerDetailFindById,
};
