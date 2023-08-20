const mongoose =require('mongoose')

// define schema 
const btechSchema=new mongoose.Schema({
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
    user_id:{
        type:String ,
        required:true
    },
    status:{
        type:String ,
        default:'Pending'
    },
    comment:{
        type:String ,
        default:'Pending'
    },

},{timestamps:true})


// create collection             
const BtechModel= mongoose.model('btech',btechSchema)
//                                ^ collection name  


module.exports=BtechModel
