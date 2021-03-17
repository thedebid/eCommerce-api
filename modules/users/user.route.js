const express = require('express')
const router = express.Router()
<<<<<<< HEAD
const userController = require('./user.controller') 
=======
const userController = require('./user.controller')
>>>>>>> dev2

router
    .route('/')
    .get(function(req,res,err){
        console.log("dvgf")
    })
    .post(userController.createUser)

module.exports = router;
