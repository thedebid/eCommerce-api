const userController = require('./user.controller')
const express = require('express')
const router = express.Router()

router
    .route('/')
    .get(userController.getUserList)
    .post(userController.createUser)

module.exports = router
