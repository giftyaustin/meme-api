const {Image} = require('../database/memeModel')
const {User} = require('../database/userModel')
const jwt_decode = require('jwt-decode')
const {key} = require('./signupController')
const jwt = require('jsonwebtoken')
const { tryCatch } = require('../errorHandling/tryCatch')

exports.uploadImage=tryCatch(async(req,res,next)=>{
   const {image} = req.body
   const user = await User.findById(req.user.id)
   if(user){
      user.memes.push(image)
      await user.save()
      res.json({
         success:true,
         message:'Your meme is uploaded on cloud'
        })
   }
   else{
      next()
   }
   

})
