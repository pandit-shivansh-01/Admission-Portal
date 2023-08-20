const mongoose =require('mongoose')

// define schema 
const bcaSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    address:{
        type:String ,
        required:true
    },
    college:{
        type:String ,
        required:true
    },
    branch:{
        type:String ,
        required:true
    },
    course:{
        type:String ,
        required:true
    },

},{timestamps:true})


// create collection             
const BcaModel= mongoose.model('bca',bcaSchema)
//                                ^ collection name  


module.exports=BcaModel