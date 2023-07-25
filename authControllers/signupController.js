const {User} = require('../database/userModel')
const jwt = require('jsonwebtoken')
const { tryCatch } = require('../errorHandling/tryCatch')



exports.signupUser = tryCatch(async (req, res, next)=>{
    const {username, password} = req.body
    const user = User.findOne({username:username})
    if(user){
        res.status(401).json({
            success:false,
            message: "Username already exists"
        })
    }
    const newUser = await  User.create({username:username, password:password})
    await newUser.save()
    newUser.sendJWT(req, res, next)
})
