const userService = require("./../user/user.service");
const userModel = require("./../user/user.model");
const bcrypt = require("bcrypt");
const config = require("./../../config.json");
const jwt = require("jsonwebtoken");
const sendEmail = require("./../../helpers/send-email");
const randomTokenString = require("./../../helpers/randomTokenGenerator");
const resetToken = require("./resetToken.model");
const { token } = require("morgan");

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

//check email already rehistered or not before registering user
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

async function verifyToken({ token }) {
  const tokenInfo = await resetToken
    .findOne({
      token: token,
      expires: { $gt: Date.now() },
    })
    .populate("user", { password: 0 });

  if (!tokenInfo) throw "Invalid token";

  return tokenInfo;
}

//change password
async function chPassword(email, password) {
  const user = await userService.findByEmail(email);
  const hashPasword = bcrypt.hashSync(password, config.BCRYPT.SALT);
  user.password = hashPasword;
  return user.save();
}

// create a jwt token containing the user id
function generateJwtToken(user) {
  return jwt.sign({ id: user._id }, config.JWT.JWT_SECRET, { expiresIn: "1d" });
}

//forgot password and send code to email
async function fPassword(email, ip) {
  const user = await userService.findByEmail(email);
  // always return ok response to prevent email enumeration
  if (!user) return;
  // create reset token that expires after 24 hours
  const token = {
    code: randomTokenString(4), //it return four random number
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
  };
  const newToken = new resetToken({});
  newToken.user = user._id;
  newToken.token = token.code;
  newToken.expires = token.expires;
  newToken.createdByIp = ip;

  // send email
  await sendPasswordResetEmail(user, token.code);

  await newToken.save();
}

//for sending mail
async function sendPasswordResetEmail(account, token) {
  let message;
  message = `<p>Please use this code ${token} to reset your password, the code will be valid for 1 day.</p>`;
  await sendEmail({
    to: account.email,
    subject: "eMall API - Reset Password",
    html: `<h4>Reset Password Email</h4>
             ${message}`,
  });
}

module.exports = {
  auth,
  register,
  verifyToken,
  chPassword,
  fPassword,
};
