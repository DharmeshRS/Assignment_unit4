const express=require('express')
const connect = require('./configs/db');
const userController=require('./controllers/user.controller')
const studentController=require('./controllers/student.controller');
const evaluationController = require('./controllers/evaluation.controller');
const app=express();
app.use(express.json())
const port=8000;
app.use('/user',userController)
app.use('/student',studentController)
app.use('/evaluation',evaluationController)
const start=async()=>{
    const con=await connect();
    console.log("Connected to database")
    app.listen(port,()=>{
    console.log(`Listening On port ${port}`)
 })
}

module.exports=start;