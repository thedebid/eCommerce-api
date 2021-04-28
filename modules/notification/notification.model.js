const mongoose = require('mongoose')
const notificationSchema = mongoose.Schema(
    {   
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    title: {
        type:String,
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    status: {
        type: Number,
        default: 0
    }
},
{
    timestamps: true,
}
);

const notificationModel = mongoose.model("notification", notificationSchema);
module.exports = notificationModel;