const express = require('express')
const router = express.Router()
const {creatOrder,getOrderById,updateOrdertoPadid,getMyPersonalOrder} =require('../controller/order')
const { auth } =require ('../middleware/authMiddleware')

router.route('/create/order').post(auth, creatOrder);
router.route('/get/order/:id').get(auth, getOrderById);
router.route('/update/order/:id/paid').put(auth, updateOrdertoPadid);
router.route('/myorder').get(auth, getMyPersonalOrder);



module.exports=router