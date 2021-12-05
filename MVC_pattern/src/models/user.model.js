const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    first_name:String,
    last_name:String,
    gender:{
        type:String,
        default:"Male",
        require:true
    },
    dob:{
        type:String
    }
},
{
    versionKey:false,
    timestamps:true
})

module.exports=mongoose.model("user",userSchema);