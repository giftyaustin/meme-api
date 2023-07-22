const express = require("express")
const { isAuthorized } = require("../middlewares/isAuthorized")
const { setGuest } = require("../authControllers/userController")
const userRouter = express.Router()

userRouter.route('/user').post(isAuthorized)
userRouter.route('/guest').get(setGuest)

module.exports = {userRouter}