//user serv
const userModel = require( "./user.model")
async function save(data){
    var newUser = new userModel;
   // newUser.email = data.email;
}

module.exports = {
    save
}