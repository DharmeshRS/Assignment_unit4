const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    profile_pic_url:{
        type:String
    },
    roles:{
        type:String
    }

},
{
    versionKey:false,
    timestamps:true
})

module.exports=mongoose.model("user",userSchema)