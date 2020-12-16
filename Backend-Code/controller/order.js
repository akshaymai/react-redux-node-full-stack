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
   }),





// getAllproduct:   asyncHandeler(async(req,res)=>{
// const product=await Product.find()
// if(product){
//     res.json(product)
// }else{
//     res.status(404)
//     throw new Error('product Not  Fetch   ')
// }
// }),


getOrderById:  asyncHandeler(async(req,res)=>{
  console.log('gfhjkilkhgfcvxcvhj',req.params.id)
    const order=await Order.findById(req.params.id).populate('user','name email')
    console.log('hhhhhhhhhhhhhhhhhh',order)
    if(order){
        res.json(order)
    }else{
        res.status(404)
        throw new Error('Order found this id ')
    }
    }),

getMyPersonalOrder:  asyncHandeler(async(req,res)=>{
 
        const order=await Order.find({user:req.user._id})
      
        if(order){
            res.json(order)
        }else{
            res.status(404)
            throw new Error('This person not purchase any order')
        }
        }),
    

 
updateOrdertoPadid:  asyncHandeler(async(req,res)=>{
 
    const order=await Order.findById(req.params.id)
     console.log('sdfgtdsdfgh',order)
    if(order){
      
      order.isPaid=true;
      order.paidAt=new Date().toDateString()
      order.paymentResult={

        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address
      }

      const updatedOrder=await order.save()
      res.send(updatedOrder)
    }else{
        res.status(404)
        throw new Error('Order status not upated ')
    }
    })
}   



