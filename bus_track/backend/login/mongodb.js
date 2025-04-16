const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/bustrack_user")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})

const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)
module.exports=collection