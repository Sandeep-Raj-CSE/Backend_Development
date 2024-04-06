import mongoose from "mongoose";


const todosSchema=new mongoose.Schema(
    {
  content:{
    type:String,
    required:true

  },
  complete:{
    type:Boolean,
    default:false
  },
  createdBy:{
    type:mongoose.Schema.ObjectId,
    ref:"User"
  }
},{timestamps:true})


const todos=mongoose.model("todos",todosSchema);