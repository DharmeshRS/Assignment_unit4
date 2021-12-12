const mongoose=require('mongoose')
const userModel = require('./user.model')

const gallerySchema=new mongoose.Schema({
    pictures:[{
        type:String
    }],
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:userModel
    }

},{
    versionKey:false,
    timestamps:true
})

module.exports=mongoose.model("gallery",gallerySchema)