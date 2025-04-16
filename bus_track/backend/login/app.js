const express = require("express")
const collection = require("./mongodb")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/",cors(),(req,res)=>{

})


app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({ email: email, password: password })

        if(check){
            return res.json({status: "exist" , user:check});
        }
        else{
            return res.json({status: "notexist"});
        }

    }
    catch(e){
        return res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{email,name,mobile,address,password}=req.body

    const data={
        email:email,
        password:password,
        mobile:mobile,
        address:address,
        name:name
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            return res.json({status: "exist" , user:check});
        }
        else{
            await collection.insertMany([data])
            const newUser = await collection.findOne({email:email});
            return res.json({status: "notexist" , user:newUser});
        }

    }
    catch(e){
       return res.json("fail")
    }

})

app.listen(8000,()=>{
    console.log("port connected");
})
