const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
const userSchema=new mongoose.Schema({

    name:{
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
    password:{
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


userSchema.pre('save',async function (next){
    var user=this;

   if(!user.isModified('password')){
  next()
   }
 user.password=await bcrypt.hash(user.password,8)
 })


userSchema.methods.Comparepassword=async function (userpassword){

    return await bcrypt.compare(userpassword,this.password )
}

const User=mongoose.model('User',userSchema)


module.exports={User}