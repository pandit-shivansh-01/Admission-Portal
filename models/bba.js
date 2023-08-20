const mongoose =require('mongoose')

// define schema 
const bbaSchema=new mongoose.Schema({
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
const BbaModel= mongoose.model('bba',bbaSchema)
//                                ^ collection name  


module.exports=BbaModel
