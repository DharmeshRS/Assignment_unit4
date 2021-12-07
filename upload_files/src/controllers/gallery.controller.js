const express=require('express');

const galleryModel=require('../models/gallery.model')

const router=express.Router()

router.get("/",async(req,res)=>{
    try{
        const gallery_pics=await galleryModel.find({}).lean().exec()
        return res.status(201).json({data:gallery_pics})
    }catch(err){
        res.status(400).send(err)
    }
})

router.post("/",async(req,res)=>{
    try{
        const pics=await galleryModel.create(req.body)
        return res.status(201).json(pics)
    }catch(err){
        res.status(400).send(err)
    }
})