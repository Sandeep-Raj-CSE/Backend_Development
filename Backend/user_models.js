import mongoose from "mongoose";

const userSchema = new mongoose.Schema(

    // this method is also true but we can follow some standard procedure
    // {
    //     username: String,
    //     email:String,
    //     loginAllowed:Boolean,
    // },
    
    {
        username:
        {
            type:String,
            required:true,
            unique:true,
            lowercase:true,

        },
        email:{
            type:String,
            required:true,
            unique:true
        }

    },{
        timestamps:true
    }

);

export const User=mongoose.model("User",userSchema);