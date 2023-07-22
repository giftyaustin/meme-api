const { User } = require("../database/userModel");
const { tryCatch } = require("../errorHandling/tryCatch");
const jwt = require('jsonwebtoken')

exports.isAuthorized = tryCatch(async (req, res, next)=>{
    const token = req.cookies.token
    if(token){
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if(decoded){
            
            req.user = await  User.findById(decoded)
            if(req.body.special){
                res.status(200).json({
                    authorized:true,
                    user:req.user
                })
            }
            else{
                next();
            }
            
        }
        else{
            res.status(401).json({
                success:false,
                message: 'User unauthorized'
            })
        }
    }

})