const {Order} =require('../model/order')
const asyncHandeler=require('express-async-handler')

module.exports={

   creatOrder: asyncHandeler(async(req,res)=>{

    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      } = req.body

      if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('No order items')
    
      } else {
        const order = new Order({
          orderItems,
          user: req.user._id,
          shippingAddress,
          paymentMethod,
          itemsPrice,
          taxPrice,
          shippingPrice,
          totalPrice,
        })
    
        const createdOrder = await order.save()
    
        res.status(201).json(createdOrder)

   }
   })





// getAllproduct:   asyncHandeler(async(req,res)=>{
// const product=await Product.find()
// if(product){
//     res.json(product)
// }else{
//     res.status(404)
//     throw new Error('product Not  Fetch   ')
// }
// }),


// getProductbyId:  asyncHandeler(async(req,res)=>{
//     const product=await Product.findById(req.params.id)
//     if(product){
//         res.json(product)
//     }else{
//         res.status(404)
//         throw new Error('product not found this id ')
//     }
//     })
}