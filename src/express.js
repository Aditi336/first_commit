const express=require('express')
const collection=require('./mongo')
const cors=require('cors')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors())


app.get("/",cors(),(req,res)=>{
    return res.json("hi there")
})
app.post("/",async(req,res)=>{
    const {email,password}=req.body
    try{
        const check=await collection.findOne({email:email})
        if(check){
            return res.json("exist")//this checks if email already exist
        }
    }
    catch(e){
          console.log("not exist login")
    }
})


app.post("/signup",async(req,res)=>{
    const {name,email,address,mobile,gender,password}=req.body
    const data={
        name:name,
        email:email,
        address:address,
        mobile:mobile,
        gender:gender,
        password:password
    }
    try{
        const check=await collection.findOne({email:email})
        if(check){
            return  res.json(data)
        }
        else
        {
            await collection.insertMany({data})

        }
    }
    catch(e){
         console.log("not exist signup")
    }
})
app.listen(8000,()=>{
    console.log("connected")
})
