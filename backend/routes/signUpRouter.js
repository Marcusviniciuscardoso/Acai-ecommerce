const express = require('express')
const signUpRouter = express.Router()
const signUpController = require('../controllers/signUpController')

signUpRouter.get('/signUp/:id', signUpController.getSignUp)

module.exports = signUpRouter
