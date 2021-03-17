const router = require('express').Router()
const userRoute = require('../modules/user/user.route')
const categoryRoute = require('../modules/category/category.route')
router.use('/user', userRoute)
router.use('/category', categoryRoute)

module.exports = router
