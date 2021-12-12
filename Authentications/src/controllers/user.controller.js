const express=require('express')

const router=express.Router()

const register=async(req,res)=>{
    try{
        return res.status(201).send("register method")
    }catch(err){
        res.status(400).send(err)
    }
}

const login=async(req,res)=>{
    try{
        return res.status(201).send("login method")
    }catch(err){
        res.status(400).send(err)
    }
}

module.exports={register,login}