const express=require("express");
const router=express.Router()
const {userCreate,getData}=require("../controller/useController")
const userModel=require("../models/userModel")

router.post("/register",userCreate)
router.get("/getData/:id",getData)

// router.post("/register",async(req,res)=>{
//     try {
//         const data1=req.body;
//         console.log(data1)
//         const userData= await userModel.create(data1)
//         res.status(201).send({status:true,data:userData})
//     } catch (error) {
//         return res.status(500).send({status:false,message:error,message})
//     }
   

// })

// console.log(userCreate)
// all route handle
// router.all("/*", function (req ,res){
//     res.status(400).send("Invalid request........!!!")
// })

module.exports=router