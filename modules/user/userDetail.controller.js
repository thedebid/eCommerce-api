const userDetailService = require("./userDetail.service");

// controller for saving user details
function createUserDetail(req, res, next) {
    userDetailService.save(req.body).then(result=>{
        res.status(200).json(result)
    }).catch(err=>{
       next(err)
    })
}

// update category
function updateUserDetail(req, res, next) {
    
    userDetailService
        .update(req.params.id, req.body)
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err))
}


module.exports = {
    createUserDetail,
    updateUserDetail
}