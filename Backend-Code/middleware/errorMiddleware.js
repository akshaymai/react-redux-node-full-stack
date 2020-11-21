


const notFound=(req,res,next)=>{

    const error=new Error(`not found url -${req.originalUrl}`)
    res.status(404)
    next(error)

}


const errorHandler=(err,req,res,next)=>{
    console.log('dfghgjgh',res)
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message:err.message,
        stack:process.env.NODE_ENV === 'development' ? err.stack : null
    })
    }


    module.exports={notFound,errorHandler}