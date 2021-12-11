const mongoose =require('mongoose')
const userModel = require('./user.model')

const postSchema=mongoose.postSchema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:userModel
    }

})

module.exports=mongoose.Schema("post",postSchema)