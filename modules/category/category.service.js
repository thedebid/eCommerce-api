const categoryModel = require("./category.model")

// function for saving category 
function save(data){
    var newCategory = new categoryModel({});
    newCategory.name = data.name
    newCategory.icon = data.icon
    return newCategory.save()
}

//function for getting all category data
function getAll(){
    return  categoryModel.find({});
   
}

// function for getting category by id 
async function findById(id){
    
    const category = await categoryModel.findById(id)
    if(!category) throw 'Category with' + `${id}` + 'not found'
    return category
}

// function for deleting category
async function remove(id){
    const category = await findById(id)
    await category.remove(id)
}

module.exports = {
    save,
    getAll,
    findById,
    remove
}