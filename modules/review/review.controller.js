const reviewModel = require("./review.model");
const reviewService = require("./review.service")

// controller for saving review
function createReview(req, res, next) {
    reviewService
      .save(req.body)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        next(err);
      });
  }

  
  //controller for getting all review data
function getReviewList(req, res, next) {
  reviewService
      .getAll()
      .then((result) => {
          if (!result.length) {
              return next({
                  message: 'Review not found',
                  status: '500',
              })
          }
          res.status(200).json(result)
      })
      .catch((err) => {
          next(err)
      })
}

//controller for getting review by id
function getReviewById(req, res, next) {
  reviewModel
      .findById(req.params.id)
      .then((result) => res.status(200).json(result))
      .catch((err) => next(err))
}

// update review details
function updateReview(req, res, next) {
  reviewService
    .update(req.params.id, req.body)
    .then((result) => res.status(200).json(result))
    .catch((err) => next(err));
}

// function for deleting review review id
  function deleteReview(req, res, next) {
    reviewService
        .remove(req.params.id)
        .then(() =>
            res.status(200).json({
                message: 'Review deleted successfully',
            })
        )
        .catch((err) => next(err))
  }

  // find user id
function reviewFindByUserId(req, res, next){
  reviewService
  .findByUserId(req.params.id)
  .then((result) => res.status(200).json(result))
  .catch((err) => next(err));
}


  module.exports = {
      createReview,
      getReviewList,
      getReviewById,
      updateReview,
      deleteReview,
      reviewFindByUserId
      
  }