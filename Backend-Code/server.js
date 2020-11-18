const express=require('express')
const app=express()
const morgan=require('morgan')
var cors = require('cors')
const Products=require('../Backend-Code/data/products')

app.use(express.json())
app.use(morgan('tiny'))


 
app.use(cors())

app.get('/product',(req,res)=>{
res.json(Products)
})

app.get('/product/:id',(req,res)=>{
    const product=Products.find((item)=>item._id === req.params.id);
 
    res.json(product)
})

app.listen(5000,()=>{
    console.log('app is running on port 5000')
})