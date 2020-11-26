const express=require('express')
const router=express.Router();


router.post('/login',require('../controller/user').loginUser)
router.post('/signup',require('../controller/user').registration)


module.exports=router