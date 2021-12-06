const express=require("express");
const User = require("../models/user.model");
const {body,validationResult}=require("express-validator")
const router=express.Router();

router.post("/",
    // body("id").isLength({min:1}).withMessage("Id is Required"),
    body("first_name").isLength({min:1}).withMessage("first name is required and must be valid"),
    body("last_name").isLength({min:1}).withMessage("Last name is required and must be valid"),
    body("email").isEmail().withMessage("Email Invalid format"),
    body("pincode").isLength({min:6}).withMessage("Invalid pin-code please check again"),
    body("gender").isLength({min:1}).withMessage("Gender Is Invalid"),
    body("age").isLength({min:1}).withMessage("Age is 18+"),  
    
    async(req,res)=>{

        const errors=validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({data:errors.array()})
        }
        const user=await User.create(req.body)
        return res.status(201).json({data:user})
});

router.get("/",async(req,res)=>{
    try{
        const users_data=await User.find({}).lean().exec()
    }catch(err){
        res.status(400).send(err)
    }
})
module.exports=router;