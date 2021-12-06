const express=require('express')

const app=express()
const port=8000
const connect=require("./configs/db")
const userController=require("./controller/user.controller")
app.use(express.json())
app.use("/users",userController)
const start=async ()=>{
        await connect();
        console.log("connection  Established");
        app.listen(port,()=>{
            console.log(`listening on port ${port}`)
        })
}

module.exports=start;

