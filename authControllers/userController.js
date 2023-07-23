const { tryCatch } = require("../errorHandling/tryCatch");

exports.setGuest = tryCatch(async (req, res, next)=>{
    res.cookie('token', 'q', {secure: true ,httpOnly:true, sameSite:'none', expries:Date(Date.now())})
    res.json({
        success:true,
    })
})