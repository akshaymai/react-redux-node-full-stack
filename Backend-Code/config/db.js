const mongoose=require('mongoose')
var colors = require('colors');

const connectDB= async()=>{


    try{

     const result=  await  mongoose.connect(process.env.DB_URL,{
            useFindAndModify:true,
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        console.log(`DB is CONNETED,${result.connection.host}`.green)
    }
    catch (err){

        console.log(`Db is not connected,${err.message}`.red.underline)
        process.exit(1)
    }


}


module.exports=connectDB