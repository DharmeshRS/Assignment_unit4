const mongoose=require('mongoose')
const connect=()=>{
    return mongoose.connect('mongodb://localhost:27017/paginationEmail')
}

module.exports=connect;