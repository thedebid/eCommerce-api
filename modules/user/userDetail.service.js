const userDetailModel = require('./userDetail.model')
const userModel = require('./user.model')
// function for saving user details
async function save(data){


    const user = await userModel.findById(data.userid)
    if (!user) throw { status: 400, message: 'User not found in system' }
    var newUserDetail = new userDetailModel({});
    newUserDetail.user = data.userid;
    newUserDetail.image = data.image;
    newUserDetail.address = data.address;
    newUserDetail.phone = data.phone;
    newUserDetail.gender = data.gender;
   return newUserDetail.save()
  }

  module.exports = {
      save
  }