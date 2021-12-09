const express=require('express');
const userModel = require('../models/user.model');
const user = require('../models/user.model');
const transporter=require('../configs/mail')
const router=express.Router();

router.get('/',async(req,res)=>{
    try{
        const page=+req.query.page || 1;
        const size=+req.query.limit ||10;
        const offset=(page-1)*size;
        const user_data=await userModel.find({}).skip(offset).limit(size).lean().exec();
       
        const total_user=Math.ceil(await userModel.find({}).skip(offset).limit(size).countDocuments().lean().exec())/size;
        return res.status(201).json({totalpages:total_user,data:user_data})
    }catch(err){
        res.status(400).send(err)
    }
})

router.post("/",async(req,res)=>{
    console.log(req.body)
    try{
        const singleuser=await userModel.create(req.body)
        
        let message = await transporter.sendMail({
            from: 'dsonar@gmail.com', // sender address
            to: "bar@example.com, baz@example.com,prateek@gmail.com,dharmesh@gmail.com,yogesh@gmail.com", // list of receivers
            subject: ` Welcome to ABC system ${req.body.firstname} ${req.body.lastname}`, // Subject line
            text: `Hi ${req.body.firstname}, Please confirm your email address`, // plain text body
            html: "<h1>This Message Send By Dharmesh Sonar.This Is Welcome Mail</h1>", // html body
          });

          transporter.sendMail(message)
        return res.status(201).json({message:"User Saved successfully",data:singleuser})
    }catch(err){
        res.status(400).send(err)
    }
})

module.exports=router;