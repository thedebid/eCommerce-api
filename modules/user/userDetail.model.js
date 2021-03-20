const mongoose = require("mongoose");
const userDetailSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    image: {
      type: String,
    },
    address: {
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

const userDetailModel = mongoose.model("userDetail", userDetailSchema);
module.exports = userDetailModel;
