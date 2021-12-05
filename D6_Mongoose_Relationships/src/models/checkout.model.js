const mongoose=require('mongoose')
const bookModel = require('./book.model')

const checkoutSchema=mongoose.Schema({
    user_name:{
        type:String
    },
    book_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:bookModel,
        unique:true
    }
})

module.exports=mongoose.model("checkout",checkoutSchema)