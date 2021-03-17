const userService =require( "./user.service");

//controller for saving user data
function createUser(req, res, next) {
    userService.save(req.body).then(result=>{
        res.status(200).json(result)
    }).catch(err=>{
       next(err)
    })
}

//controller for getting all user data
function getUserList(req, res, next) {
    userService
        .getAll()
        .then((result) => {
            if (!result.length) {
                return next({
                    message: 'User not found',
                    status: '500',
                })
            }
            res.status(200).json(result)
        })
        .catch((err) => {
            next(err)
        })
}

//controller for getting user data by id
function getUserById(req, res, next) {
    userService
        .findById(req.params.id)
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err))
}

function deleteUser(req, res, next) {
    userService
        .remove(req.params.id)
        .then(() =>
            res.status(200).json({
                message: 'User deleted successfully',
            })
        )
        .catch((err) => next(err))
}


module.exports = {
    createUser,
    getUserList,
    getUserById,
    deleteUser
}
