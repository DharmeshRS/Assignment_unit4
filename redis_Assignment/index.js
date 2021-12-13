const express=require('express')
// const fetch=require('node-fetch')
const redis=require('redis')

const PORT=5000;
const REDIS_PORT=6379;

const app=express()

app.listen(5000,()=>{
    console.log(`Listening on port ${PORT}`)
});