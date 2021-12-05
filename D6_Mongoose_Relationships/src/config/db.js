const mongoose=require('mongoose')

const connect=()=>{
    return mongoose.connect("mongodb://localhost:27017/mongoose_relationship")
    // ,{
    //     useNewUrlParser:true,
    //     useUnifiedTopology:true,
    //     useCreateIndex:true,
    //     useFindAndModify:true
    // });;

};


module.exports=connect;