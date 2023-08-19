import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    firstname:{
        type:String,
        trim:true,
        required:true,
        min:5,
        max:20

    },
    lastname:{
        type:String,
        trim:true,
        required:true,
        min:5,
        max:20

    }, 
    username:{
        type:String,
        trim:true,
        required:true,
        index:true,
        unique:true,
        lowercase:true,
        

    },
     email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        lowercase:true,

    }, 
    password:{
        type:String,
        trim:true,
        required:true,
      

    },
    phone:{
        type:Number,
        required:true,
        
    }
})
const user = mongoose.model('Signup-Users',UserSchema);
export default user;
