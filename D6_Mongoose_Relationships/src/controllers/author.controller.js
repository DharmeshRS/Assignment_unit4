const express=require('express')
const authorModel = require('../models/author.model')
const AuthorModel=require('../models/author.model')
const app=express()
const router=express.Router()

router.post("/",async(req,res)=>{
    try{
        const author=await AuthorModel.create(req.body)
        return res.status(201).json({data:author})
    }catch(err){
        res.status(401).send(err)
    }
})

router.get("/",async(req,res)=>{
    try{
        const author_data=await authorModel.find({})
        .populate({
            path:'book',
            select:{
                _id:0
            },
            populate:{
                path:"section",
                select:{
                    _id:0,
                    section_type:1
                }
            }
        })
        .lean()
        .exec()
        res.status(201).json(author_data)
    }catch(err){
        res.status(400).send(err)
    }
})

router.get("/:name",async(req,res)=>{
    try{
        const audata=await AuthorModel.find({first_name:req.params.name})
        .populate({
            path:'book',
            select:{
                _id:0
            },
            populate:{
                path:"section",
                select:{
                    _id:0,
                    section_type:1
                }
            }
        })
        return res.send(audata)
    }catch(err){
        res.status(400).send(err)
    }
})


module.exports=router;