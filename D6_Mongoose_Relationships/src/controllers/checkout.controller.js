const express=require('express')
const mongoose=require('mongoose')
const checkoutSchema = require('../models/checkout.model')

const router=express.Router()

router.post("/",async(req,res)=>{
        try{
            const checkout_details=await checkoutSchema.create(req.body)
            return res.status(201).json({data:checkout_details})
        }catch(err){
            return res.status(400).json({message:err.message,status:"Book Already Checkout"})
        }
})
    

router.get("/",async(req,res)=>{
    try{
        const checkout_data=await checkoutSchema.find({}).lean().exec();
        return res.status(200).send(checkout_data)
    }catch(err){
        return res.status(401).send(err)
    }
})

module.exports=router;