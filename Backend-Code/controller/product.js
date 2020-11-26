const {Product} =require('../model/product')
const asyncHandeler=require('express-async-handler')

module.exports={

getAllproduct:   asyncHandeler(async(req,res)=>{
const product=await Product.findById(req.params.id)
if(product){
    res.json(product)
}else{
    res.status(404)
    throw new Error('product not found this id ')
}
}),


getProductbyId:  asyncHandeler(async(req,res)=>{
    const product=await Product.findById(req.params.id)
    if(product){
        res.json(product)
    }else{
        res.status(404)
        throw new Error('product not found this id ')
    }
    })
    








}