
const reviewModel = require('./review.model')
const userDetailModel = require('../user/userDetail.model')
const userModel = require('../user/user.model')
const helper = require("../../helpers/isValid")


//function for saving review
async function save(data) {
    const user = await userModel.findById(data.user);
    if(!user) throw {status:400, message: "Users not found in the system"};
    var newReviewList = new reviewModel({});
    newReviewList.message = data.message;
    newReviewList.rating = data.rating;
    newReviewList.status = data.status;
    newReviewList.user = data.user;
    return newReviewList.save();
  }
 

 //function for getting all review data
function getAll() {
    return reviewModel.find({});
  }

  //function for getting review by id
async function findById(id) {
    if (!helper.isValidId(id)) throw "Invalid review id:" + ` ${id}`;
    const review = await reviewModel.findById(id);
    if (!review) throw "Review with" + ` ${id} ` + "not found";
    return review;
  }

  //function for updating review
async function update(id, data) {
    const review = await findById(id);
    // copy params to review and save
    Object.assign(review, data);
    return review.save();
  }

  //function for deleting review
    async function remove(id) {
        const review = await findById(id);
        await review.remove(id);
    }

    // function for getting user by user id
    async function findByUserId(id) {
        const user = await userDetailModel
          .findOne({ user: id });
          console.log(user)
        if (!user) throw "Details of user with" + ` ${id} ` + "not found";
        return user;
      }


  // exports module

  module.exports = {
      save,
      getAll,
      findById,
      update,
      remove,
      findByUserId

  }