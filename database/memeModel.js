const mongoose = require('mongoose')
const memesSchema = mongoose.Schema({
   image: {type:String, required: true},
   user:{type:mongoose.Schema.Types.ObjectId, ref: 'User', required:true}

})
const Image = mongoose.model('Image', memesSchema)

module.exports = {Image}