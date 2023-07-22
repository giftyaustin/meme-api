const { User } = require("../database/userModel");
const jwt = require("jsonwebtoken");
const { key } = require("./signupController");
const { tryCatch } = require("../errorHandling/tryCatch");

exports.loginUser = tryCatch(async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username }).select('+password');
    if(user && user.password === password){
        user.sendJWT(req, res, next)
    }
    else{
        res.status(401).json({
            success: false,
            message: 'invalid username or password'
        })
    }

});