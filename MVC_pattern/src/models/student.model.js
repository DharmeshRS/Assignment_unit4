const mongoose = require('mongoose');
const userModel = require('./user.model');

const studentSchema=mongoose.Schema({
    roll_no:Number,
    current_batch:String,
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:userModel
    }

    },
    {
        versionKey:false,
        timestamps:true
    })

module.exports=mongoose.model("student",studentSchema)