const express = require('express')
const productInfoRouter = express.Router()
const productInfoController = require('../controllers/productInfoController')

productInfoRouter.get('/productInfo/:id', productInfoController.getProductInfo)

module.exports = productInfoRouter