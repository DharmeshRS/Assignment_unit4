const express=require('express')
const theatreModel=require('../models/theatre.model')
const screenModel=require('../models/screen.model')
const router=express.Router()


router.post('/',async(req,res)=>{
    try{
        const screen=await screenModel.create(req.body)
        res.status(201).json({message:"screen Saved Successfully",screen_details:screen})
    }catch(err){
        res.status(400).send(err)
    }
})

router.get('/',async(req,res)=>{
    try{
        const all_movies=await screenModel.find({}).lean().exec();
        res.status(201).json(all_movies)
    }catch(err){
        res.status(400).send(err)
    }
})

module.exports=router