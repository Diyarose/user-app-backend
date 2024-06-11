const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {usermodel}=require("./models/user")

const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://dhiya04:dhiyafisat@cluster0.wspdqan.mongodb.net/userapp?retryWrites=true&w=majority&appName=Cluster0")


app.post("/",(req,res)=>{
    res.send("Login")
})

app.post("/signup",(req,res)=>{
    let input=req.body
    let user=new usermodel(input)
    user.save()
    console.log(user)
    res.json({status:"success"})
})

app.post("/search",(req,res)=>{
    res.send("Search")
})

app.post("/delete",(req,res)=>{
    res.send("Delete")
})

app.get("/view",(req,res)=>{
    usermodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch()
    
})

app.listen(8080,(req,res)=>{
    console.log("server started")
})