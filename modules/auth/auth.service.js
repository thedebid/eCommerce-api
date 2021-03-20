const userService = require("./../user/user.service");
function auth(data) {
  const { email, password } = data;
  const user = userService.findById();
}

module.exports = {
  auth,
};
