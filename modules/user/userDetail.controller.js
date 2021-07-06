const userDetailService = require("./userDetail.service");

// controller for saving user details
function createUserDetail(req, res, next) {
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
  userDetailService
    .save(data)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      next(err);
    });
}

// update user details
function updateUserDetail(req, res, next) {
  userDetailService
    .update(req.params.id, req.body)
    .then((result) => res.status(200).json(result))
    .catch((err) => next(err));
}

// find user details
function userDetailFindById(req, res, next) {
  userDetailService
    .findById(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => next(err));
}

module.exports = {
  createUserDetail,
  updateUserDetail,
  userDetailFindById,
};
