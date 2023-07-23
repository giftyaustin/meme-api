const { tryCatch } = require("../errorHandling/tryCatch");

exports.setGuest = tryCatch(async (req, res, next)=>{
    res.cookie('token', 'q', {httpOnly:true, sameSite:'none', secure:true, expries:Date(Date.now())})
    res.json({
        success:true,
    })
})
