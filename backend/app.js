const express = require('express')
const cors = require('cors')
const app = express()
const productInfoRouter = require('./routes/productInfoRouter')
const signUpRouter = require('./routes/signUpRouter')

app.use(cors())
app.use(express.json())
app.use(productInfoRouter)
app.use(signUpRouter)


module.exports = app