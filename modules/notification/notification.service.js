const notificationModel = require('./notification.model');

// function for saving notification

function save(data){
    var newNotification = new notificationModel({});
    newNotification.user = data.userid
    newNotification.title = data.title
    newNotification.description = data.description
    newNotification.image = data.image
    newNotification.status = data.status
    return newNotification.save();
}

//function for getting all notification data
function getAll(){
    const query = {};
    return  notificationModel.find(query).sort( { "updatedAt": -1 }); 
}

//function for getting notification by user id
async function findById(id) {
    const notification = await notificationModel
      .findOne({ user: id })
      .populate("user");
    if (!notification) throw "Notification of user with" + ` ${id} ` + "not found";
    return notification;
  }

// function for updating notification
async function update(id,data){
    const notification = await findById(id);

    // copy params to subCategory and save
    Object.assign(notification, data);
    return notification.save();
}

// function for getting notification by notification id 
async function notificationById(id){
    const notification = await notificationModel.findById(id)
    if(!notification) throw 'Notification with' + `${id}` + 'not found'
    return notification
}
// function for deleting notification
async function remove(id){
    const notification = await notificationById(id)
    await notification.remove(id)
  }


module.exports = {
    save,
    getAll,
    findById,
    update,
    remove,

}