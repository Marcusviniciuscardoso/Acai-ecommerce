const productInfoModel = require('../models/productInfoModel')

const getProductInfo = async(req, res) =>{
    console.log("Cade essa caralha ? ", req.params.id)
    const {id} = req.params
    const productInfo = await productInfoModel.getProductInfo(id)
    return res.status(200).json(productInfo)
}

const getAllProductInfo = async(req, res) =>{
    const getAllProductInfo = await productInfoModel.getAllProductInfo()
    return res.status(200).json(getAllProductInfo)
}

module.exports = {getProductInfo, getAllProductInfo}