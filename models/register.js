const mongoose =require('mongoose')

// define schema 
const registerSchema=new mongoose.Schema({
    image:    
    {
      public_id: {
        type: String,
        
      },
      url: {
        type: String,
         
      },
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    role:{
      type:String,
      default:'user'
  },
    password:{
        type:String,
        required:true
    }

},{timestamps:true})


// create collection             
const RegisterModel= mongoose.model('register',registerSchema)
//                                ^ collection name  


module.exports=RegisterModel
