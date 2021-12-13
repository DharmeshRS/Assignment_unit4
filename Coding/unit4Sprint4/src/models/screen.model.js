const mongoose=require('mongoose')
const theatreModel = require('./theatre.model')

const screenSchema=new mongoose.Schema({
    name:{
        type:String
    },
    theatre_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:theatreModel
    }]
})