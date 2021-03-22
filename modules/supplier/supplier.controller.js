const supplierService = require('./supplier.service');

//controller for saving supplier data
async function createSupplier(req, res, next) {
  
    // const supplier = await supplierService.save(req.body)
    // if (!supplier) {
    //    next()
    // }
    // else
    //     res.status(200).json({supplier,message: "Supplier added successfully"});

    supplierService.save(req.body).then(result=>  res.status(200).json({result,message: "Supplier added successfully"}))
    .catch(err=>next(err))


}

//controller for getting all supplier data
function getSupplierList(req, res, next) {
    supplierService
        .getAll()
        .then((result) => {
            
            if (!result.length) {
                return next({
                    message: 'Supplier not found',
                    status: '400',
                })
            }
            res.status(200).json(result);

        })
        .catch((err) => {
            next(err)
        })
}

// controller for getting supplier data by id
function getSupplierByID(req, res, next) {
    supplierService
        .findById(req.params.id)
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err))
}

// controller for updating supplier data
function updateSupplier(req, res, next){ 
    supplierService.update(req.paras.id, req.body)
    .then((result)=> res.status(200).json(result))
    .catch((err)=>next(err));
}

// controller to delete supplier data
function deleteSupplier(req,res,next){
    supplierService.remove(req.params.id)
    .then(()=> 
            res.status(200).json({
                message : "Supplier deleted successfully",
            })
    )
    .catch((err)=> next(err))
}



module.exports = {
    createSupplier,
    getSupplierList,
    getSupplierByID,
    updateSupplier,
    deleteSupplier,

}