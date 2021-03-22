
const supplierModel = require ('./supplier.model');

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

//function for getting user data by id
async function findById(id) {
    if (!helper.isValidId(id)) throw `Invalid supplier id : ${id}`;
    const supplier = await supplierModel.findById(id);
    if (!supplier) throw `Supplier with ${id} not found`;
    return supplier;
}

async function update(id){
    if (!mongoose.isValidObjectId(req.params.id)){
        res.status(500).send("Invalid supplier id")
    }
    else{
        const supplier = await findByIdAndUpdate(Id);
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
}


