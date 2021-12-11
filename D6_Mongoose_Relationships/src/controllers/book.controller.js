const express=require("express");
const bookModel = require("../models/book.model");

const app=express();

const router=express.Router();

router.post("/",async(req,res)=>{
    const book=await bookModel.create(req.body)
    return res.status(201).json({data:book})
})

router.get("/",async (req,res)=>{
    // res.send("get method of book")
    try{
        const bookdata=await bookModel.find({}).populate('section')
        res.status(201).json(bookdata)
    }catch(err){
        res.status(400).send(err)
    }
})

module.exports=router;