
const mongoose=require("mongoose")


//  const ObjectIdSchema= mongoose.Schema.ObjectId
//  const ObjectId=mongoose.Types.ObjectId;

 const useSchema= new mongoose.Schema({
      // _id: ObjectIdSchema,
      //  userId:{
      //   type:Number,
      //   required:true,
      //   unique:true,
      //  },

      id:{
        type:Number
      },

      title:{
        type:String,
        default:"N/A"
      },
      channel:{
        type:String,
        default:"Aj Coder"
      },
      views:{
        type:String,

      },
      time:{
        type:String,
        default:"1 Month ago"
      },
      verified:{
       type:Boolean,
       default:true
      },
      
 },{timestamps:true})

//  useSchema.pre("save", async function (next) {
//   var docs = this;
//   const User=mongoose.model("React_Master_Youtube",useSchema)
//      await User.countDocuments({ account: docs.account }, function (error, counter) {
//       if (error) return  next(error);
//       docs.idContract =  counter + 1;
//       next();
//     });
// });



//  const User=mongoose.model("React_Master_Youtube",useSchema)

//  useSchema.pre("save",async function(next){
//   if(this.isNew) {
//     const highestUserId= await User.findOne({},"userId").sort({userId:-1}).limit(1)
//     this.userId= highestUserId ? highestUserId.userId +1 : 1 ;
//   }
//   next();
//  })

 module.exports=mongoose.model("React_Master_Youtube",useSchema)
