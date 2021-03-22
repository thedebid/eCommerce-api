const express = require("express");
const router = express.Router();
const categoryController = require("./category.controller");
const subCategoryController = require("./subCategory.controller");

// route to controllers

router
  .route("/")
  .get(categoryController.getCategoryList)
  .post(categoryController.createCategory);

router.route("/subcategory").post(subCategoryController.createSubCategory);

router
  .route("/subcategory/:id")
  .get(subCategoryController.subCategoryFindById)
  .put(subCategoryController.updateSubCategory);

router
  .route("/:id")
  .get(categoryController.getCategoryById)
  .delete(categoryController.deleteCategory)
  .put(categoryController.updateCategory);

module.exports = router;
