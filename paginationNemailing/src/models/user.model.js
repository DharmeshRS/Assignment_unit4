const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String
    }
    },
    {
        versionKey:false,
        timestamps:true
    })

module.exports=mongoose.model("user",userSchema)