const express = require('express')
const app = express()
// require('dotenv/config')
const morgan = require('morgan')
const APIRoute = require('./routes/api.route')
 require('./configs/mongoose')
const config = require('./config.json')

//Middlewares
//For log
app.use(morgan('tiny'))

//For reading json and urlencoded data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//API Routes
const api = config.API_URL
app.use(`${api}/`, APIRoute)

//Server
app.listen(config.PORT, () => {
    console.log('Server is running at port ' + config.PORT)
})

//For error handling
app.use(function (err, req, res, next) {
    console.log('Error handling middleware', err)
    res.status(err.status || 400).json({
        message: err.message || err,
        status: err.status || 400,
    })
})
