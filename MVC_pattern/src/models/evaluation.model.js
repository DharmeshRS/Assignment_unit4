const mongoose=require('mongoose')
const userModel = require('./user.model')

const evaluationSchema=mongoose.Schema({
    date_of_evaluation:String,
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:userModel
    },
    topic_name:String,
    subject_name:String

},{
    versionKey:false,
    timestamps:true
})

module.exports=mongoose.model("evaluation",evaluationSchema)