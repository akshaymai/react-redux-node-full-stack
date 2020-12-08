const {User} =require('../model/user')
const asyncHandeler=require('express-async-handler')
const bcrypt=require('bcryptjs')
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

return res.json({
    name:newuser.name,
    _id:newuser._id,
    password:newuser.password,
    email:newuser.email,
    isAdmin:newuser.isAdmin
})

}


}),




userProfile:asyncHandeler((req,res)=>{

res.send(req.user)

}),


updateProfile:asyncHandeler(async (req,res)=>{

    const update=Object.keys(req.body)
  const allowupdate=['name','email','password']
const checkupdate=update.every((updates)=> allowupdate.includes(updates))
if(!checkupdate){
    return res.status(404).send('please enter valide field')
}

if(req.body.password){
req.body.password=bcrypt.hashSync(req.body.password,8);
}
 
try {

    const user=await User.findByIdAndUpdate(req.user._id,req.body,{new:true,runValidators:true})

    if(!user){
        return res.status(404).send()
    }
    else{
        res.send(user)
    }
} catch (error) {

    res.status(401)
    throw new Error('Update Failed')
}
   
})
}  

