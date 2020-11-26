const jwt=require('jsonwebtoken')
const {User} =require('../model/user')
const asyncHandler=require('express-async-handler')



const auth=asyncHandler(async (req,res,next)=>{

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
 
try {
    
    const token=req.headers.authorization.split(' ')[1]
     
    const decode= jwt.verify(token,process.env.JWT_SECRET)
 
    req.user=await User.findById(decode.id)


     next()
} catch (error) {
    res.status(401)
    throw new Error('you are Unauthorzied')
    
}



    }else{
        res.status(401)
        throw new Error('Token Not Found')
    
    }



})

module.exports={auth}