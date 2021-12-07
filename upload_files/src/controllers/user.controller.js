const  express=require("express")
const userModel=require("../models/user.model")
const router=express.Router()
const upload=require('../utils/file-upload')
router.get("/",async(req,res)=>{
    try{
        const userdata=await userModel.find({}).lean().exec();
        return res.status(200).json({data:userdata})
    }catch(err){
        res.status(400).send(err)
    }
})

router.post("/",upload.single("productImages"),async(req,res)=>{
    try{
        const user=await userModel.create({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            profile_url:req.file.path
        })
        return res.send(201).json({data:user})

    }catch(err){
        res.status(400).send(err)
    }
})

router.post("/multiple",async(req,res)=>{
    try{
        // const user=await userModel.create(req.body)
        // return res.send(201).json(user)
        return res.send("multiple")
    }catch(err){
        res.status(400).send(err)
    }
})
module.exports=router;