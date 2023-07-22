
const {User} = require('../database/userModel')
const jwt_decode = require('jwt-decode')
const {key} = require('./signupController')
const jwt = require('jsonwebtoken')
const { tryCatch } = require('../errorHandling/tryCatch')

exports.getUserMemes=tryCatch(async (req, res, next)=>{
    const user = await User.findById(req.user.id)
    if(user){
        res.status(200).json({
            success:true,
            memes:user.memes
        })
    }
    else{
        next()
    }
})
