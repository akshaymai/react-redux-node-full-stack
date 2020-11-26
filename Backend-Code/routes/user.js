const express=require('express')
const router=express.Router();


router.post('/login',require('../controller/user').loginUser)



module.exports=router