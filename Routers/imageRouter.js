const express = require("express")
const imageRouter = express.Router()
const {uploadImage} = require('../authControllers/imageUpload.js')
const {getUserMemes} = require('../authControllers/getmemes.js')
const { isAuthorized } = require("../middlewares/isAuthorized.js")
imageRouter.post('/upload',isAuthorized, uploadImage)
imageRouter.get('/fetch',isAuthorized, getUserMemes)
module.exports = {imageRouter}