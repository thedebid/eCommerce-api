const customerModel = require("./customer.model");
const helper = require("./../../helpers/isValid");
const bcrypt = require("bcrypt");
const config = require("./../../config.json");

//function for saving customer data
function save(data) {
  var newCustomer = new customerModel({});
  newCustomer.email = data.email;
  newCustomer.password = bcrypt.hashSync(data.password, config.BCRYPT.SALT);
  return newCustomer.save();
}
 
//function for getting all customer data
function getAll() {
  return customerModel.find({});
}

//function for getting customer data by id
async function findById(id) {
  if (!helper.isValidId(id)) throw "Invalid customer id:" + ` ${id}`;
  const customer = await customerModel.findById(id);
  if (!customer) throw "customer with" + ` ${id} ` + "not found";
  return customer;
}

//function find by email
async function findByEmail(email) {
  const customer = await customerModel.findOne({ email: email });
  if (!customer) throw "customer with" + ` ${email} ` + "not found";
  return customer;
}

//function for deleting customer
async function remove(id) {
  const customer = await findById(id);
  await customer.remove(id);
}

//function for updating customer 
async function update(id, data) {
  const customer = await findById(id);
  // copy params to customer and save
  Object.assign(customer, data);
  return customer.save();
}

module.exports = {
  save,
  getAll,
  findById,
  remove,
  update,
  findByEmail,
};
