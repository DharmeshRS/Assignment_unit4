const mongoose=require('mongoose')

const userModel=mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String
    },
    profile_url:{
        type:String
    }
})

module.exports=mongoose.model("user",userModel)