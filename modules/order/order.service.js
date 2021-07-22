
const orderModel = require('./order.model');
const cartService = require('../cart/cart.service');
const notificationService = require('../notification/notification.service');
const helper= require("./../../helpers/isValid");
const sendEmail = require("./../../helpers/send-email");
const userService = require('./../user/user.service');
const userDetailService = require('./../user/userDetail.service');
const userDetailModel = require('./../user/userDetail.model');
const productModel = require('../product/product.model');
const Mongoose = require("Mongoose");

// function to save order
 async function save(data){ 

     //console.log(data);  
     const order = await orderModel.insertMany(data.data);
     
     const orderid = data.data.map(item=>
         item.product
     )

    const products = await productModel.find({
        '_id': { $in: 
           orderid
        }
    });

    let bulkArr = [];

    for (const i of products) {
        bulkArr.push({
           updateOne: {
                "filter": { "_id": Mongoose.Types.ObjectId(i._id) },
                "update": { $inc: { "countInStock": -1 } }
            }
        })
    }
  const a = await  productModel.bulkWrite(bulkArr);


  products.forEach(item=>console.log(item.price))
    

        // for email
        const userId = data.data[0].user;
        const user = await userService.findById(userId);
        const email = user.email;
        console.log(email);

        const userDetails = await userDetailService.findById(userId);
        const username = userDetails.username;
        const address = userDetails.addres;
        const phone = userDetails.phone;

        // console.log(address);

        sendOrderEmail(email,username,address,phone);

         // delete in cart
          cartService.deleteCart(userId);

        return true;
}


//for sending mail
async function sendOrderEmail(email,username,address,phone) {
    let message;
    // message = `

    // <div>
    // <table>
    //     <tbody>
    //     <tr>
    //         <td>
    //             <div class="m_-4584546384260517222container">
    //                 <div class="m_-4584546384260517222msg-header">
    //                     <img src="#" alt="eMall-logo" class="CToWUd">
    //                 </div>
    //                 <div class="m_-4584546384260517222msg-body">
    //                     <div>
    //     <h5>Dear Rajendra,</h5>
    //     <p>Thank you for the purchase. The details are as follows: </p>
    //     <table border="1">
    //         <thead>
    //         <tr>
    //             <th>Product Name</th>
    //             <th>Transaction Date</th>
    //             <th>Transaction Amount (NPR)</th>
    //         </tr>
    //         </thead>
    //         <tbody>
    //         ${product.forEach(item=>
    //             `<tr>
    //             <td>$(item.name)</td>
    //             <td>$(item.createdAt)</td>
    //             <td>$(item.price)</td>
    //     </tr>`

    //         })}
    //        </tbody>
    //     </table>
    //     <p><b>To view more details, please login to e-Mall app.</b></p>
    // </div>
    //                     <h3>Thank You !!!</h3>
    //                     <div class="m_-4584546384260517222es-name">e-Mall</div>
    //                     <div class="m_-4584546384260517222es-slogan">Sale | Purchase | Receive</div>
    //                 </div>
    //             </div>
    //         </td>
    //     </tr>
    //     </tbody>
    // </table><div class="yj6qo"></div><div class="adL">
    // </div>
    // </div>
    // `;
    message = `<h1>e-Mall</h1> <br><br>
               <p>Thank you for the payment. The details are as follows:.</p>
               <p>Phone Number: ${phone}</p>
               <p>Shipping Address: ${address}`;
    await sendEmail({
      to: email,
      subject: "e-Mall Transaction Notification",
      html: `<h4>Dear ${username},</h4>
               ${message}`,
    });
  }

// function for getting all order details 
function getAll(){
    return orderModel.find({});
}

async function findByUserId(id) {
    if (!helper.isValidId(id)) throw "Invalid user id:" + ` ${id}`;
    const order = await orderModel.find({user: id}).populate("user").populate("product").populate("supplier");
    if (!order) throw "User with" + ` ${id} ` + "not found";
    return order;
  }

// function for getting a order details by id
async function findById(id){
const order = await orderModel.findById(id);
if(!order) throw "Order not found";
return order;
}

// function for updating order
async function update(id,data){
    const order = await findById(id);
    Object.assign(order, data);
   
    return order.save();
}

// function for deleting product
async function remove(id){
    const order = await findById(id);
    return order.remove()
}

// function for getting order details by user details
async function findByUserId(id) {
    if (!helper.isValidId(id)) throw "Invalid user id:" + ` ${id}`;
    const order = await orderModel.find({user: id}).populate("user").populate("product").populate("supplier");
    if (!order) throw "User with" + ` ${id} ` + "not found";
    return order;
  }


module.exports = {
    save,
    getAll,
    findById,
    update,
    remove,
    findByUserId,
    sendOrderEmail,
}
