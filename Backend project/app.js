const express=require('express')
const routes=require('./routes/movieroutes')
require('dotenv').config()
const port=process.env.PORT

const app=express()
app.use('/routes',routes) 

require('./db/connection');





app.listen(port,()=>{
    console.log(`server running on ${port}`)    
})