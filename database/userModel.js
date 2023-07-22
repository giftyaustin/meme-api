const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config()


const userSchema = mongoose.Schema({
  username: { type: String, unique: true, required: true, minLength:5},
  password: { type: String, required: true, minLength:8 , select:false},
  memes:[{type:String}]
});

userSchema.methods.sendJWT=function(req, res, next){
    const token = jwt.sign(this.id, process.env.JWT_SECRET)
    res.cookie('token', token, {httpOnly: true, sameSite: 'none', domain:process.env.CLIENT_DOMAIN, secure:true})
    res.status(200).json({
      success:true,
      message: 'token sent'
    })
}

const User = mongoose.model("User", userSchema);


module.exports = { User };
