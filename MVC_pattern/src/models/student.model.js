const mongoose = require('mongoose');
const userModel = require('./user.model');
const evalModel = require('./evaluation.model');

const studentSchema=mongoose.Schema({
    roll_no:Number,
    current_batch:String,
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:userModel
    },
    evaluation_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:evalModel
    }
    },
    {
        versionKey:false,
        timestamps:true
    })

module.exports=mongoose.model("student",studentSchema)