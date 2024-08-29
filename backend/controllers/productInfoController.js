const productInfoModel = require('../models/productInfoModel')

const getProductInfo = async(req, res) =>{
    console.log("Cade essa caralha ? ", req.params.id)
    const {id} = req.params
    const productInfo = await productInfoModel.getProductInfo(id)
    return res.status(200).json(productInfo)
}

module.exports = {getProductInfo}