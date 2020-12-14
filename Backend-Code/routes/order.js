const express = require('express')
const router = express.Router()
const {creatOrder,getOrderById} =require('../controller/order')
const { auth } =require ('../middleware/authMiddleware')

router.route('/create/order').post(auth, creatOrder);
router.route('/get/order/:id').get(auth, getOrderById);


module.exports=router