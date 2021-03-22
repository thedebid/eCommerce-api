const userDetailModel = require("./userDetail.model");
const userModel = require("./user.model");

// function for saving user details
async function save(data) {
  const user = await userModel.findById(data.userid);
  if (!user) throw { status: 400, message: "User not found in system" };
  var newUserDetail = new userDetailModel({});
  newUserDetail.user = data.userid;
  newUserDetail.image = data.image;
  newUserDetail.address = data.address;
  newUserDetail.phone = data.phone;
  newUserDetail.gender = data.gender;
  return newUserDetail.save();
}

//function for getting user detail by id
async function findById(id) {
  //  if (!helper.isValidId(id)) throw 'Invalid user id:' + ` ${id}`
  const userdetails = await userDetailModel
    .findOne({ user: id })
    .populate("user");
  if (!userdetails) throw "Details of user with" + ` ${id} ` + "not found";
  return userdetails;
}

async function update(id, data) {
  const userDetail = await findById(id);
  // copy params to userDetail and save
  Object.assign(userDetail, data);
  return userDetail.save();
}

module.exports = {
  save,
  update,
  findById,
};
