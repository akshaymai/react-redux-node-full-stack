const express=require('express')
const router=express.Router();
const {auth}=require('../middleware/authMiddleware')
const {userProfile} =require('../controller/user')
router.post('/login',require('../controller/user').loginUser)
router.post('/signup',require('../controller/user').registration)

router.route('/getprofile').get(auth,userProfile)


module.exports=router