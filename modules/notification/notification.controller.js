
const notificationService = require("./notification.service");

// controller for saving notification

function createNotification(req, res, next){
    notificationService
        .save(req.body)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            next(err);
        });
    }

//controller for getting all category
function getNotificationList(req, res, next) {
    notificationService
        .getAll()
        .then((result) => {
            if (!result.length) {
                return next({
                    message: 'Notification not found',
                    status: '500',
                })
            }
            res.status(200).json(result)
        })
        .catch((err) => {
            next(err)
        })
}


// find notification by user id
function notificationFindById(req, res, next){
    notificationService
    .findById(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => next(err));
}

// find notification by notification id
function notificationById(req, res, next){
    notificationService
    .notificationById(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => next(err));
}

// update notification 
function updateNotification(req, res, next){
    notificationService
    .update(req.params.id, req.body)
    .then((result) => res.status(200).json(result))
    .catch((err) => next(err));
}


function deleteNotification(req, res, next) {
    notificationService
        .remove(req.params.id)
        .then(() =>
            res.status(200).json({
                message: 'Notification deleted successfully',
            })
        )
        .catch((err) => next(err))
}


module.exports = {
        createNotification,
        getNotificationList,
        notificationFindById,
        deleteNotification,
        updateNotification,

}

