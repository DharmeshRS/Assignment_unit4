const mongoose=require('mongoose')

const express=require('express')
const evaluationModel = require('../models/evaluation.model')
const router=express.Router()

router.post("/",async(req,res)=>{
    try{
        const eval_data=await evaluationModel.create(req.body)
        return res.status(200).json({data:eval_data})

    }catch(err){
        res.status(400).send(err)
    }
})

router.get("/",async(req,res)=>{
    try{
        const all_student=await evaluationModel.find({}).lean().exec()
        return res.status(200).json({data:all_student})
    }catch(err){
        res.status(400).send(err)
    }
})

module.exports=router;