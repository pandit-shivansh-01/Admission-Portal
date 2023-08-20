const BtechModel = require("../models/btech")

class CollegeController{
    static dashboard=async(req,res)=>{
        try{
            const {name,image}=req.admin
            const data= await BtechModel.find()
            res.render('college/dashboard',{s:name,r:image})
        }catch(err){
            console.log(err)
        }
    }
    static displaydata=async(req,res)=>{
        try{
            const {name,image}=req.admin
            const data= await BtechModel.find()
            res.render('college/display',{s:name,r:image,f:data})
        }catch(err){
            console.log(err)
        }
    }
    static update_approval=async(req,res)=>{
        try{
    // console.log(req.body);
          const result = await BtechModel.findByIdAndUpdate(req.params.id,{
            comment:req.body.comment,
            status:req.body.status
          })
        res.redirect('/college/dashboard')
        }
        catch(err){
          console.log(err);
        }
    
      }
}
module.exports=CollegeController