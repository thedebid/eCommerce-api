const jwt = require("jsonwebtoken");
const config = require("./../config.json");
const userModel = require("./../modules/user/user.model");

module.exports = function (req, res, next) {
  var token;
  if (req.headers["authorization"]) token = req.headers["authorization"];
  if (req.headers["x-access-token"]) token = req.headers["x-access-token"];
  if (req.headers["token"]) token = req.headers["token"];
  if (req.query.token) token = req.query.token;

  if (token) {
    jwt.verify(token, config.JWT.JWT_SECRET, function (err, decoded) {
      if (err) {
        return res.status(401).json({
          message: "Invalid token or it is expired.",
          status: "401",
        });
      }
      // console.log("decoded value is >", decoded);
      userModel.findById({ _id: decoded.id }).then(function (user) {
        if (user) {
          // database current record is attached in every req
          req.user = user;
          next();
        } else {
          next({
            msg: "User with this token does not exist.",
          });
        }
      });
    });
  } else {
    next({
      msg: "Token not provided.",
    });
  }
};
