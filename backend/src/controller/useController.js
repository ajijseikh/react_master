
const userModel=require("../models/userModel")
const counterModel =require("../models/autoIncrement")

const userCreate= async (req,res)=>{
   res.header('Access-Control-Allow-Origin','*')
   try {
   
     
  
   const data1=req.body;
   
      
     const obj={
        "id":await userModel.find().count()+1 ,
        ...data1
       }
    
   const userData=await userModel.create(obj)
         res.status(201).send({status:true,data:userData})
  

   } catch (error) {
    return res.status(500).send({status:false, message:error.message})
   }
}



   

  const getData= async (req,res)=>{
   try {
        const id=req.params.id
     
        const data= await userModel.find({id:id})
     
        res.status(200).send({status:true,data:data})
   } catch (error) {
      return res.status(500).send({status:false, message:error.message})
   }
  }
 module.exports.userCreate=userCreate
 module.exports.getData=getData
