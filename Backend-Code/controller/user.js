const {User} =require('../model/user')
const asyncHandeler=require('express-async-handler')
const  {genarateToken}=require('../utils/genarateAutthtoken')
module.exports={

loginUser:   asyncHandeler(async(req,res)=>{

const {email,password}=req.body

const user=await User.findOne({email:email})

if(user && (await user.Comparepassword(password))){
res.json({
    _id:user._id,
    name:user.name,
    email:user.email,
    isAdmin:user.isAdmin,
    token:genarateToken(user._id)
})
}else{
    res.status(401)
    throw new Error('Invalid email or password')
}
}),

registration :asyncHandeler(async(req,res)=>{

    console.log('rrr',req.body)
const {email}=req.body

const checkuser=await User.findOne({email:email})

if(checkuser){
    res.status(400)
    throw new Error('User alredy registerd')
}else{

    const newuser=await User.create({...req.body})

    console.log('ff',newuser) 
return res.json({
    name:newuser.name,
    _id:newuser._id,
    password:newuser.password,
    email:newuser.email,
    isAdmin:newuser.isAdmin
})

}


})
}  