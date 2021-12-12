const mongoose=require('mongoose')
const express=require('express')
const { connect } = require('./configs/db')
const { register,login } = require('./controllers/user.controller')

const port=process.env.port || 8000

const app=express()
app.use(express.json())
app.post("/register",register);
app.post("/login",login)

const start=async ()=>{
    const con=await connect()
    console.log("connection Established...");

    app.listen(port,()=>{
        console.log(`Listening On port ${port}`)
    })
}

module.exports=start;

