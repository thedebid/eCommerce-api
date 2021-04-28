const categoryService = require('./category.service')

//controller for saving category data
function createCategory(req, res, next){
    categoryService.save(req.body).then(result=>{
    res.status(200).json(result)
}).catch(err=>{
    next(err)
})
}

//controller for getting all category
function getCategoryList(req, res, next) {
    categoryService
        .getAll()
        .then((result) => {
            if (!result.length) {
                return next({
                    message: 'Category not found',
                    status: '500',
                })
            }
            res.status(200).json(result)
        })
        .catch((err) => {
            next(err)
        })
}

//controller for getting category data by id
function getCategoryById(req, res, next) {
    categoryService
        .findById(req.params.id)
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err))
}

function deleteCategory(req, res, next) {
    categoryService
        .remove(req.params.id)
        .then(() =>
            res.status(200).json({
                message: 'Category deleted successfully',
            })
        )
        .catch((err) => next(err))
}

// update category
function updateCategory(req, res, next) {
    console.log(req.body);
    console.log(req.params.id)
    categoryService
        .update(req.params.id, req.body)
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err))
}

module.exports = {
    createCategory,
    getCategoryList,
    getCategoryById,
    deleteCategory,
    updateCategory
}