const express = require('express')
const router = express.Router()
const {creatOrder} =require('../controller/order')
const { auth } =require ('../middleware/authMiddleware')

router.route('/create/order').post(auth, creatOrder);

module.exports=router