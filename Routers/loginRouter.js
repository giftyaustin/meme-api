const express = require("express")
const loginRouter = express.Router()
const {loginUser} = require('../authControllers/loginController')
loginRouter.post('/', loginUser)
module.exports = {loginRouter}