const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({

    Name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    passsword:{
        type:String,
        required:true,
        trim:true
    },
    isAdmin:{
        type:Boolean,
        required:true, 
        default:false
    }
})


const User=mongoose.model('User',userSchema,User)

module.exports={User}