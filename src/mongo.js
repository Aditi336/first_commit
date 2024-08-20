var mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/ice")
.then(()=>{
    console.log("mongodb is connected")
})
.catch(()=>{
    console.log("failed")
})
const newSchema=new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    mobile:String,
    address:String,
    gender:String
})

const collection=mongoose.model("collection",newSchema)
module.exports=collection

