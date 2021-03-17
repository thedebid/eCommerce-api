//user serv
const userModel = require( "./user.model")

//function for saving user data
 function save(data){
  var newUser = new userModel({});
  newUser.email = data.email;
  newUser.password = data.password;
 return newUser.save()
}

//function for getting all user data
function getAll(){
    return  userModel.find({});
   
}

//function for getting user data by id
async function findById(id) {
  //  if (!helper.isValidId(id)) throw 'Invalid user id:' + ` ${id}`
    const user = await userModel.findById(id)
    if (!user) throw 'User with' + ` ${id} ` + 'not found'
    return user
}
module.exports = {
    save,
    getAll,findById
}