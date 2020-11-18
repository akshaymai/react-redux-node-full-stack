const express=require('express')
const app=express()

const Products=require('../Backend-Code/data/products')

app.use(express.json())


app.get('/',(req,res)=>{
res.json(Products)
})

app.listen(5000,()=>{
    console.log('app is running on port 5000')
})