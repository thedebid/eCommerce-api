const express = require('express')
const router = express.Router()
const userController = require('./user.controller');
const userDetailController = require('./userDetail.controller')

// route to controllers

router
    .route('/')
    .get(userController.getUserList)
    .post(userController.createUser)

router.route('/detail')
    .post(userDetailController.createUserDetail)

//dynamic  endpoint always in end    
router
       .route('/:id')
       .get(userController.getUserById)
       .delete(userController.deleteUser)
       .put(userDetailController.updateUserDetail)

module.exports = router;
