const mongoose=require('mongoose')
const showSchema=require('./shows.model')
const screenModel=require('./screen.model')
const seatSchema=mongoose.Schema({
    show_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:showSchema
    }
})

module.exports=mongoose.model('seat',seatSchema)