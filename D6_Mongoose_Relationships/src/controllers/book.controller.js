const express=require("express");
const bookModel = require("../models/book.model");

const app=express();

const router=express.Router();

router.post("/",async(req,res)=>{
    const book=await bookModel.create(req.body).populate().lean().exec();
    return res.status(201).json({data:book})
})

router.get("/",async (req,res)=>{
    // res.send("get method of book")
    try{
        const bookdata=await bookModel.find({})
        .populate('section')
        // .populate({
        //     path:'section',
        //     select:{
        //         section_type:1,
        //         _id:0
        //     }

        // })
        res.status(201).json(bookdata)
    }catch(err){
        res.status(400).send(err)
    }
})

module.exports=router;