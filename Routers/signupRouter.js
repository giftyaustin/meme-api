const express = require("express")
const signupRouter = express.Router()
const {signupUser} = require('../authControllers/signupController.js')
signupRouter.post('/', signupUser)
module.exports = {signupRouter}