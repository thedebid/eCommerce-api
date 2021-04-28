const customerDetailModel = require("./customerDetail.model");
const customerModel = require("./customer.model");

// function for saving customer details
async function save(data) {
  const customer = await customerModel.findById(data.customerid);
  if (!customer) throw { status: 400, message: "customer not found in system" };
  var newCustomerDetail = new customerDetailModel({});
  newCustomerDetail.customer = data.customerid;
  newCustomerDetail.image = data.image;
  newCustomerDetail.addres = data.addres;
  newCustomerDetail.phone = data.phone;
  newCustomerDetail.gender = data.gender;
  return newCustomerDetail.save();
}

//function for getting customer detail by id
async function findById(id) {
  //  if (!helper.isValidId(id)) throw 'Invalid customer id:' + ` ${id}`
  const customerdetails = await customerDetailModel
    .findOne({ customer: id })
    .populate("customer");
  if (!customerdetails) throw "Details of customer with" + ` ${id} ` + "not found";
  return customerdetails;
}

async function update(id, data) {
  const customerDetail = await findById(id);
  // copy params to customerDetail and save
  Object.assign(customerDetail, data);
  return customerDetail.save();
}

module.exports = {
  save,
  update,
  findById,
};
