const express = require('express')
const router = express.Router()
const notificationController = require('./notification.controller');

// route to controllers
router
    .route('/')
    .get(notificationController.getNotificationList)
    .post(notificationController.createNotification);

router
    .route('/:id')
    .get(notificationController.notificationFindById)
    .put(notificationController.updateNotification)
    .delete(notificationController.deleteNotification)
module.exports = router;
