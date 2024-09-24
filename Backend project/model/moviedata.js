const mongoose=require('mongoose')
//creating schema

const movieschema=mongoose.Schema({  //collection schema
    movieName:String,
    movieDirector:String,
    movieDescription:String,
    moviePrice:Number
})
const moviedata=mongoose.model('movie',movieschema);//collection name,schema name

module.exports=moviedata   