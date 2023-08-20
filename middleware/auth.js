const jwt = require('jsonwebtoken')
const RegisterModel = require('../models/register')


const admin_auth = async(req,res,next)=>{
    // console.log('hello admin');
   try{
    const{token} = req.cookies
    // console.log(token);
    const verify_token = jwt.verify(token,"shivanshpandey04")
    // console.log(verify_token);
    const admin_data = await RegisterModel.findOne({_id:verify_token.id})
    // console.log(admin_data);
    req.admin = admin_data
       next()
   }
   catch(err){
    res.redirect('/login');
   }
 }

module.exports = admin_auth