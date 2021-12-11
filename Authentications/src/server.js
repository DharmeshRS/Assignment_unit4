const mongoose=require('mongoose')
const express=require('express')
const { connect } = require('./configs/db')
const {  } = require('./controllers/auth.controller')

const port=process.env.port || 8000

const app=express()
app.use(express.json())
app.use()
const start=()=>{
    const con=await connect()
    console.log("connection Established...");

    app.listen(port,()=>{
        console.log(`Listening On port ${port}`)
    })
}


module.exports=start;

