const express=require('express')
const connect = require('./configs/db')
const userController=require('./controllers/user.controller')
const app=express()

app.use(express.json())
const port=5000
app.use('/user',userController)
const start=async ()=>{
    const con=await connect();
    console.log("connected to database");
    app.listen(port,()=>{
        console.log(`listening on port ${port}`)
    })
}

module.exports=start;
