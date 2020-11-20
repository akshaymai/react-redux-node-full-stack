const express=require('express')
const app=express()
const morgan=require('morgan')
const dotenv=require('dotenv')
const dbConnecion=require('../Backend-Code/config/db')
// import morgan from 'morgan';
// import dotenv from 'dotenv';

var cors = require('cors')
const Products=require('../Backend-Code/data/products.js')
dotenv.config()

dbConnecion();
 


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

const PORT=process.env.PORT || 5000.

app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`)
})