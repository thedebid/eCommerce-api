const path = require("path");
const multer = require("multer");

function filter(req, file, cb) {
  const mimetype = file.miletype.split("/")[0];
  if (mimetype == "image") {
    cb(null, true);
  } else {
    req.fileError = "Invalid file format";
    cb(null, false);
  }
}

const diskStorage = multer.diskStorage({
  filename: function (req, res, cb) {
    cb(null, Date().now + "-" + file.origialname);
  },
  destination: function (req, res, cb) {
    cb(null, path.join(process.cwd(), "uploads/images"));
  },
});

const upload = multter({
  storage: diskStorage,
  fileFilter: filter,
});

module.exports = upload;
