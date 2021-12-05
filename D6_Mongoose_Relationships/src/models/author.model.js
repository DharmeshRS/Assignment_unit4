const mongoose = require('mongoose');
const Book = require('./book.model');

const authorSchema=new mongoose.Schema({
    first_name:String,
    last_name:String,
    book:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Book
    }
})

module.exports=mongoose.model('Author',authorSchema)