const express=require('express')
const router=express.Router();
const asyncHandeler =require('express-async-handler')
const {Product} =require('../model/product')


router.get('/',
asyncHandeler( async (req,res)=>{
const products=await Product.find({})
res.json(products)
}
))

 

router.get('/:id',

asyncHandeler(async(req,res)=>{
const product=await Product.findById(req.params.id)
if(product){
    res.json(product)
}else{
    res.status(404)
    throw new Error('product not found this id ')
}
})
)



module.exports=router