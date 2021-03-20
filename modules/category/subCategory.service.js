const categoryModel = require("./category.model");
const subCategoryModel = require("./subCategory.model");

// function for saving sub categories 
async function save(data){
    const category = await categoryModel.findById(data.categoryid);
    if(!category) throw {status:400, message: "Category not found in the system"};
    var newSubCategory = new subCategoryModel({});
    newSubCategory.category = data.categoryid;
    newSubCategory.name = data.name;
    newSubCategory.icon = data.icon;
    newSubCategory.status = data.status;
    return newSubCategory.save();
}

//function for getting category by id
async function findById(id) {
    const subCategory = await subCategoryModel
      .findOne({ category: id })
      .populate("category");
    if (!subCategory) throw "Details of category with" + ` ${id} ` + "not found";
    return subCategory;
  }

// function for updating sub category details
async function update(id,data){
    const subCategory = await findById(id);

    // copy params to subCategory and save
    Object.assign(subCategory, data);
    return subCategory.save();
}
  
  module.exports = {
      save,
      findById,
      update
  }