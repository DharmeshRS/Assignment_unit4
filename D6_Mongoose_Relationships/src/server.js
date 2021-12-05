const express=require('express');
const connect = require('./config/db');
const sectionController=require("./controllers/section.controller");
const bookController = require('./controllers/book.controller');
const authorController=require('./controllers/author.controller');
const checkoutController=require("./controllers/checkout.controller")
const app=express();
const port=8000;
app.use(express.json())
app.use("/section",sectionController)
app.use("/checkout",checkoutController)
app.use("/book",bookController)
app.use("/author",authorController)
const start=async()=>{
    const con=await connect();
    console.log("Connected to database")
    app.listen(port,()=>{
    console.log(`Listening On port ${port}`)
 })
}

module.exports=start;