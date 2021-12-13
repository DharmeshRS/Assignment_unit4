const mongoose=require('mongoose')
const movieSchema=require('./movie.model')
const showSchema=mongoose.Schema({
    timing:{
        type:String
    },
    movie_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:movieSchema
    }
})

module.exports=mongoose.Model('show',showSchema)