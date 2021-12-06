const mongoose=require('mongoose')
require('express-validator')
const userSchema=mongoose.Schema({
    
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true,
        default:"Male"
    },
    age:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model("User",userSchema)