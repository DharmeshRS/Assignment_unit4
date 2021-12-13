const express=require("express")
const connect=require('./configs/db')
const userController=require('./controllers/user.controller')
const movieController=require('./controllers/movie.controller')
const theatreController=require('./controllers/theatre.controller')
const screenController=require('./controllers/screen.controller')
const app=express()
const port=8000

app.use(express.json())
app.use('/user',userController)
app.use('/movie',movieController)
app.use('/theatre',theatreController)
app.use('/screen',screenController)
const start=async ()=>{
    await connect()
    console.log("connection Established...")
    app.listen(port,()=>{
        console.log(`Listening On port ${port}`)
    })
}

module.exports=start;