const express=require('express')
const app=express()
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

app.listen(port,()=>{
    console.log("listeing to",port)
})