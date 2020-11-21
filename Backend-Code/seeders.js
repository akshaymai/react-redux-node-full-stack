const DbConnection=require('./config/db')
const {Product}=require('../Backend-Code/model/product')
const {User}=require('../Backend-Code/model/user')
const productArr=require('./data/products')
const userArr=require('./data/user')
const color=require('colors')
const dotenv=require('dotenv')
dotenv.config()

DbConnection();


const insertData= async ()=>{
try{
     await User.deleteMany();
    await Product.deleteMany()
    
const insertUser=await User.insertMany(userArr);

const findAdmin=insertUser[0]._id;

const insertProduct=productArr.map((item)=>{
    return {...item,user:findAdmin}
})

await Product.insertMany(insertProduct)


console.log(`Data inserted successfully`.blue)
process.exit()
}
   catch(err){
    console.log(`Data Not inserted `.red,err)
    process.exit(1)
   }
}

const deleteData=async ()=>{

try{
    await User.deleteMany();
    await Product.deleteMany()
console.log('deleted succesfully')
process.exit()
}
    
catch{
    console.log('deletion not get successfully..')
    process.exit(1)
}    
}



if(process.argv[2] === '-d'){
    deleteData()
}else{
    insertData()
}