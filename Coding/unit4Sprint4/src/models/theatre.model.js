const mongoose=require('mongoose')

const theatreSchema=new mongoose.Schema({
    name:{
        type:String
    },
    location:{
        type:String
    }
})

module.exports=mongoose.Model('theatre',theatreSchema)