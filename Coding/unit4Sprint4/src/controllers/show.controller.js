const express=require('express')
const theatreModel=require('../models/theatre.model')
const router=express.Router()

router.post('/',async(req,res)=>{
    try{
        const theatre=await theatreModel.create(req.body)
        res.status(201).json({message:"theatre Saved Successfully",theatre:theatre})
    }catch(err){
        res.status(400).send(err)
    }
})

router.get('/',async(req,res)=>{
    try{
        const all_theatre=await theatreModel.find({}).lean().exec();
        res.status(201).json(all_theatre)
    }catch(err){
        res.status(400).send(err)
    }
})

module.exports=router