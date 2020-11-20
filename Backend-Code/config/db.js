const mongoose=require('mongoose')

const connectDB= async()=>{


    try{

     const result=  await  mongoose.connect(process.env.DB_URL,{
            useFindAndModify:true,
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        console.log(`DB is CONNETED,${result.connection.host}`)
    }
    catch (err){

        console.log(`Db is not connected,${err}`)
        process.exit(1)
    }


}


module.exports=connectDB