
const supplierModel = require ('./supplier.model');

const productModel = require ('../product/product.model')

const helper= require("./../../helpers/isValid")
//function for saving supplier data
function save(data) {
    const newSupplier = new supplierModel({
        name : data.name,
        location : data.location,
        phone : data.phone,
        image : data.image,
        salesCount : data.salesCount,
        password : data.password,
        status : data.status
    })
    return newSupplier.save()
    }

//function for getting all user data
function getAll(){
    return supplierModel.find({});
};

//function for getting all supplier and product data using populate
function getPopulate(id){
    
    //const product = productModel.find({});
    return productModel.find({_id: id}).populate("supplier");
   
};

//function for getting user data by id
async function findById(id) {
    if (!helper.isValidId(id)) throw `Invalid supplier id : ${id}`;
    const supplier = await supplierModel.findById(id);
    if (!supplier) throw `Supplier with ${id} not found`;
    return supplier;
}

async function update(id,data){
    // if (!mongoose.isValidObjectId(req.params.id)){
    //     res.status(500).send("Invalid supplier id")
    // }

    if (!helper.isValidId(id)) throw `Invalid supplier id : ${id}`;
    else{
        const supplier = await supplierModel.findByIdAndUpdate(id);
        Object.assign(supplier, data);
        return supplier.save();
}
}

async function remove(id) {
    const supplier = await findById(id);
    await supplier.remove(id);
  }

module.exports = {
    save,
    getAll,
    findById,
    update,
    remove,
    getPopulate
}


