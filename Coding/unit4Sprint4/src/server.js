const express=require("express")

const app=express()
const port=8000
const connect=require('./configs/db')
app.use(express.json())
const start=async ()=>{
    await connect()
    console.log("connection Established...")
    app.listen(port,()=>{
        console.log(`Listening On port ${port}`)
    })
}

module.exports=start;