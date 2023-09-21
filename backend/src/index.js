const express= require("express") 
const cors=require("cors")
const mongoose = require ("mongoose")
const router=require("./routes/router")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://ajij:7pt2AejwcFh1o56K@cluster0.dwd5pcx.mongodb.net/React_Master_class"
    ,{
        useNewUrlParser:true
    })
    .then(()=>console.log("Mongodb is connected"))
    .catch(err=> console.log(err))

    app.use("/",router)

    app.listen(process.env.PORT || 3001, 
         function (){
                 console.log('Express app running on port ' + (process.env.PORT || 3001))
         } )