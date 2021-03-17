const express = require('express')
const router = express.Router()
const userController = require('./user.controller')

router
    .route('/')
    .get(function(req,res,err){
        console.log("dvgf")
    })
    .post(userController.createUser)

module.exports = router;
