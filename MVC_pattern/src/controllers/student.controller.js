const mongoose=require('mongoose')

const express=require('express')
const studentModel = require('../models/student.model')

const router=express.Router()

router.post("/",async(req,res)=>{
    try{
        const student_data=await studentModel.create(req.body).lean().exec()
        return res.status(201).json({data:student_data})
    }catch(err){
        res.status(400).send(err)
    }
})

router.get("/",async(req,res)=>{
    try{
        const student_data=await studentModel.find({}).lean().exec()
        return res.status(201).send({data:student_data})
    }catch(err){
        res.status(400).send(err)
    }
})

module.exports=router;