const express = require('express')
const router = express.Router()
const userController = require('./user.controller')
router
    .route('/')
    .get(userController.getUserList)
    .post(userController.createUser)

router
       .route('/:id')
       .get(userController.getUserById)
       .delete(userController.deleteUser)

   
module.exports = router;
