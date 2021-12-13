const express=require('express')
const theatreModel=require('../models/theatre.model')
const seatModel=require('../models/seat.model')
const router=express.Router()


router.post('/',async(req,res)=>{
    try{
        const seat=await seatModel.create(req.body)
        res.status(201).json({message:"seat are Booked Successfully",seat_details:seat})
    }catch(err){
        res.status(400).send(err)
    }
})

router.get('/',async(req,res)=>{
    try{
        const all_seats=await seatModel.find({}).lean().exec();
        res.status(201).json(all_seats)
    }catch(err){
        res.status(400).send(err)
    }
})

module.exports=router