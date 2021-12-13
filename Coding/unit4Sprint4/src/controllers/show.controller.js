const express=require('express')
const movieModel=require('../models/movie.model')
const screenModel=require('../models/screen.model')
const showModel=require('../models/shows.model')
const router=express.Router()

router.post('/',async(req,res)=>{
    try{
        const show=await showModel.create(req.body)
        res.status(201).json({message:"show Saved Successfully",show:show})
    }catch(err){
        res.status(400).send(err)
    }
})

router.get('/',async(req,res)=>{
    try{
        const all_theatre=await showModel.find({}).lean().exec();
        res.status(201).json(all_theatre)
    }catch(err){
        res.status(400).send(err)
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const singleshow=await showModel.find({movie:{$eq:req.params.id}})
                .populate({path:movieModel,
                select:"name"})
                .lean()
                .exec();
        res.status(201).json(singleshow)
    }catch(err){
        res.status(400).send(err)
    }
})

module.exports=router