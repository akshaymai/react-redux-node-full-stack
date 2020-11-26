const {User} =require('../model/user')
const asyncHandeler=require('express-async-handler')

module.exports={

loginUser:   asyncHandeler(async(req,res)=>{

    const {email,password}=req.body

    console.log('ffffffff',email)


const user=await User.findOne({email:email})


console.log(user)

if(user &&(await user.Comparepassword(password))){
res.json({
    _id:user._id,
    name:user.name,
    email:user.email,
    isAdmin:user.isAdmin,
    token:null
})

}else{
    res.status(401)
    throw new Error('Invalid email or password')
}


}),










}