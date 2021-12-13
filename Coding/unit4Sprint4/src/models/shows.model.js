const mongoose=require('mongoose')
const movieSchema=require('./movie.model')
const screenModel=require('./screen.model')
const showSchema=mongoose.Schema({
    timing:{
        type:String
    },
    movie_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:movieSchema
    },
    total_seats:{
        type:Number
    },
    screen_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:screenModel
    }]
})

module.exports=mongoose.Model('show',showSchema)