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
    token:genarateToken(user._id),
    message:'Login successfully...'
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
    message:'Register succfully...',
    isAdmin:newuser.isAdmin
})

}


}),




userProfile:asyncHandeler((req,res)=>{

res.send(req.user)

}),


updateProfile:asyncHandeler(async (req,res)=>{
//         console.log('xxxxxx',req.body)
//     const update=Object.keys(req.body)
//   const allowupdate=['name','email','password']
// const checkupdate=update.every((updates)=> allowupdate.includes(updates))
// if(!checkupdate){
//     return res.status(404).send('please enter valide field')
// }

// if(req.body.password){
// req.body.password=bcrypt.hashSync(req.body.password,8);
// }
 
// try {

//     const user=await User.findByIdAndUpdate(req.user._id,req.body,{new:true,runValidators:true})

//     if(!user){
//         return res.status(404).send()
//     }
//     else{
//         res.send({user,message:'user updated succfullly.....'})
//     }
// } catch (error) {
//        console.log("fffff",error)
//     res.status(401)
//     throw new Error('Update Failed')
// }


 let user=await User.findById(req.user._id)

  if(user){

user.name=req.body.name || user.name;
user.email=req.body.email || user.email;
if(req.body.password){
    user.password=req.body.password
}
const updatedUser=await user.save()
console.log('kkkkkkkkkkkkkkkkkkkkkkkkk',updatedUser)

return res.json({
    name:updatedUser.name,
    _id:updatedUser._id,
    password:updatedUser.password,
    email:updatedUser.email,
    message:'update succfully...',
    isAdmin:updatedUser.isAdmin,
    token:genarateToken(updatedUser._id)
})
  }else{
       res.status(404) 
    throw new Error('Update Failed')   
  }

})


}  

