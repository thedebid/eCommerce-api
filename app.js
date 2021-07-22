const express = require("express");
const app = express();
const cors = require("cors");
// require('dotenv/config')
const morgan = require("morgan");
const APIRoute = require("./routes/api.route");
require("./configs/mongoose");
const config = require("./config.json");
const errorHandler = require("./middlewares/error-handler");
//Middlewares
//For log
app.use(morgan("tiny"));
app.use(cors());

//For reading json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//API Routes
const api = config.API_URL; 
app.use(`${api}/`, APIRoute);

//Local Server
app.listen(config.PORT, () => {
  console.log(`Server is running at port : ${config.PORT}`);
});

// //Production server
// var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
// var server_host = process.env.YOUR_HOST || "0.0.0.0";
// app.listen(server_port, server_host, (err, done) => {
//   if (err) {
//     console.log("Error while listening port " + app.get("port") + " >> " + err);
//   } else {
//     console.log("Server is listening at port " + app.get("port"));
//   }
// });

//For error handling
// global error handler
app.use(errorHandler);
