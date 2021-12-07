const mongoose=require('mongoose')
const userModel = require('./user.model')

const gallerySchema=mongoose.Schema({
    pictures:{
        type:String
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:userModel
    }

})

module.exports=mongoose.model("gallery",gallerySchema)