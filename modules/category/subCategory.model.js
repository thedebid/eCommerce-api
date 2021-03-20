const mongoose = require('mongoose');
const subCategorySchema = mongoose.Schema(
    {
     category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String
    },
    status: {
        type: Number,
        default: 0
    },
},
{
    timestamps: true,
}
);

const subCategoryModel = mongoose.model("subCategory", subCategorySchema);
module.exports = subCategoryModel;

