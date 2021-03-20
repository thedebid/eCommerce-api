const authService = require("./auth.service");

function userAuthenticate(req, res, next) {
  authService
    .auth(req.body)
    .then((result) => {
      res.status(200).json({ message: "User logged in sucessfully", result });
    })
    .catch((err) => next(err));
}

function userRegister(req, res, next) {
  authService
    .register(req.body)
    .then((result) =>
      res.status(200).json({ message: "User registered sucessfully", result })
    )
    .catch((err) => next(err));
}
function forgotPassword(req, res, next) {
  authService
    .resetPassword(req.body)
    .then((result) =>
      res.status(200).json({
        message: "Please check your email for password reset instructions",
      })
    )
    .catch((err) => next(err));
}
module.exports = {
  userAuthenticate,
  userRegister,
  forgotPassword,
};
