const express=require('express')
const movieModel=require('../models/movie.model')
const router=express.Router()
const upload=require("../utils/file-upload")

router.post('/',upload.single("poster_url"),async(req,res)=>{
    try{
        const movie=await movieModel.create({
            name:req.body.name,
            actors:req.body.actors,
            languages:req.body.languages,
            directors:req.body.directors,
            poster_url:req.file.path
        })
        res.status(201).json({message:"Movie Saved Successfully",movie:movie})
    }catch(err){
        res.status(400).send(err)
    }
})

router.get('/',async(req,res)=>{
    try{
        const all_movies=await movieModel.find({}).lean().exec();
        res.status(201).json(all_movies)
    }catch(err){
        res.status(400).send(err)
    }
})

module.exports=router