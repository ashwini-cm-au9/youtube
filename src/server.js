import express from 'express'
const app=express()
import connectDB from './db/index.js'
const port=3000
app.get("/",(req,res)=>{
    res.send("healthchcek")
})

app.get("/api",(req,res)=>{
    let data=[{
        id:1,
        name:"ash"
    },{
        id:2,
        name:"arun"
    },{
        id:3,
        name:"usha"
    }]
    res.json(data)
})

app.listen(port,async()=>{
    await connectDB()
    console.log("listeing to",port)
})