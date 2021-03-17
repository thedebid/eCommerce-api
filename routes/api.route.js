const router = require('express').Router()
const userRoute = require('./../modules/users/user.route')

router.use('/user', userRoute)

module.exports = router
