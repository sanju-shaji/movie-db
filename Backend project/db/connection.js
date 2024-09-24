const mongoose=require('mongoose')
require('dotenv').config
const url=process.env.mongourl

mongoose.connect(url).then(()=>{
    console.log('connection established');
}).catch(()=>{
    console.log('Error in connection')
})