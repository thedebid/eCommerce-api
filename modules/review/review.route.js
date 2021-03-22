const express = require('express')
const router = express.Router()
const reviewController = require('./review.controller')

// route to review controller

router
    .route('/')
    .post(reviewController.createReview)
    .get(reviewController.getReviewList)

router
    .route('/:id')
    .get(reviewController.getReviewById)
    .put(reviewController.updateReview)
    .delete(reviewController.deleteReview)
router
    .route('/review-by-userid/:id')
    .get(reviewController.reviewFindByUserId)

module.exports = router
