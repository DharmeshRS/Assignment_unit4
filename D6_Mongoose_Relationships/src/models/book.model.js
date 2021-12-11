const mongoose=require('mongoose')
const Section=require("./section.model")

const BookSchema=new mongoose.Schema({
    name:String,
    body:String,
   section:{
         type:mongoose.Schema.Types.ObjectId,
        ref:Section
    }
})

module.exports=mongoose.model("Book",BookSchema)