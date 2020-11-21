const express=require('express')
const app=express()
const morgan=require('morgan')
var colors = require('colors');

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

app.use('/products',require('./routes/product'))


const PORT=process.env.PORT || 5000.

app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`.rainbow)
})

