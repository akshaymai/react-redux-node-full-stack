const express=require('express')
const router=express.Router();


router.get('/',require('../controller/product').getAllproduct)
router.get('/:id',require('../controller/product').getProductbyId)



module.exports=router