
const subCategoryService = require("./subCategory.service");

// controller for saving sub category details
function createSubCategory(req, res,next){
    subCategoryService
        .save(req.body)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            next(err);
        });
    }

// find category details
function subCategoryFindById(req, res, next){
    subCategoryService
    .findById(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => next(err));
}

// update sub category 
function updateSubCategory(req, res, next){
    subCategoryService
    .update(req.params.id, req.body)
    .then((result) => res.status(200).json(result))
    .catch((err) => next(err));
}

module.exports = {
    createSubCategory,
    subCategoryFindById,
    updateSubCategory
}