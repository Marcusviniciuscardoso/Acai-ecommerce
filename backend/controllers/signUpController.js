const signUpModel = require('../models/signUpModel')

const getSignUp = async(req, res)=>{
    const {id} = req.params
    const signUp = await signUpModel.getSignUp(id)
    return res.status(200).json(signUp)
}

module.exports = {getSignUp}