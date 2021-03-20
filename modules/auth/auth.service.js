const userService = require("./../user/user.service");
const userModel = require("./../user/user.model");
const bcrypt = require("bcrypt");
const config = require("./../../config.json");
const jwt = require("jsonwebtoken");

//login
async function auth(data) {
  const { email, password } = data;
  const user = await userService.findByEmail(email);
  const isMatched = bcrypt.compareSync(password, user.password);
  if (isMatched) {
    //generate web token
    var token = generateJwtToken(user);
    return { user, token };
  } else throw "Invalid password";
}

async function findByEmail(email) {
  const user = await userModel.findOne({ email: email });
  if (user) throw "Email already registered";
  return user;
}

async function register(data) {
  const { email, password } = data;
  await findByEmail(email);
  const hash = bcrypt.hashSync(password, config.BCRYPT.SALT);
  const hashData = {
    email,
    hash,
  };
  return userService.save(hashData);
}

async function resetPassword(data) {
  const { email } = data;
  const user = await userService.findByEmail(email);
  console.log(user);
}

function generateJwtToken(user) {
  // create a jwt token containing the user id
  return jwt.sign({ id: user._id }, config.JWT.JWT_SECRET, { expiresIn: "1d" });
}

module.exports = {
  auth,
  register,
  resetPassword,
};
