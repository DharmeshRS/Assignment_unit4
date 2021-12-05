const express=require('express');
const Section = require('../models/section.model');

const app=express();

const router=express.Router();

router.post("/",
    async (req,res)=>{
        const section=await Section.create(req.body)
        res.status(201).json({data:section})
        
    }
)
router.get("/",async(req,res)=>{
    try{
        try{
            const sectiondata=await Section.find({}).lean().exec()
            res.status(201).json(sectiondata)
        }catch(err){
            res.status(400).send(err)
            }
    }catch(err){
        res.send(err)
    }
})

module.exports=router;