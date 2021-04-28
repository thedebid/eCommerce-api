const mongoose = require("mongoose");
const customerDetailSchema = mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "customer",
      required: true,
    },
    image: String,
    addres: {
      type: String,
    },
    phone: Number,
    gender: {
      type: String,
      enum: ["Male", "Female", "Others"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const customerDetailModel = mongoose.model("customerDetail", customerDetailSchema);
module.exports = customerDetailModel;
