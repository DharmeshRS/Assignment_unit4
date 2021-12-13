const express=require('express')
const userModel=require('../models/user.model')
const router=express.Router()
const upload=require("../utils/file-upload")

router.post('/',upload.single("profile_pic_url"),async(req,res)=>{
    console.log(req.body)
    try{
        const user_data=await userModel.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            
            profile_pic_url:req.file.path,
            roles:req.body.roles
        })
        res.status(200).json({message:"User saved",user:user_data})
    }catch(err){
        res.status(400).send(err)
    }
})

router.get('/',async(req,res)=>{
    try{
        const all_users=await userModel.find({}).lean().exec();
        res.status(201).json(all_users)
    }catch(err){
        res.status(400).send(err)
    }
})

module.exports=router