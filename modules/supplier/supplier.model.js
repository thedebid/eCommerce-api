const mongoose = require("mongoose");
const supplierSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  salesCount: {
    type: Number,
    default: 0,
  },
  password: {
    type: String,
    required: true,
  },
  stauts: {
    type: Boolean,
    default: 0,
  },
});

const supplierModel = mongoose.model("supplier", supplierSchema);
module.exports = supplierModel;
