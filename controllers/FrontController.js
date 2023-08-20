const RegisterModel=require('../models/register')
const bcrypt = require('bcrypt')  // for making hash password
const jwt = require('jsonwebtoken'); // for security
const BtechModel = require('../models/btech');
const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: 'dwkppmaym',
    api_key: '359479626141935',
    api_secret: 'Q70MRVgOb7RKsAbWOZw5gYCUKWE',
    secure: false
});
class FrontController {
    static home = async (req, res) => {
        
        try{
          const{name,image,email,_id} = req.admin
          const btech=await BtechModel.findOne({user_id:_id,course:"B.Tech"})
          const bba=await BtechModel.findOne({user_id:_id,course:"BBA"})
          const bca=await BtechModel.findOne({user_id:_id,course:"BCA"})
          res.render('home',{r:image,s:name,e:email,bt:btech,bb:bba,bc:bca})
        }catch(err)
        {
          console.log(err)
        }
    }
    static login=(req,res)=>{

        res.render('login',{message:req.flash('success'),message1:req.flash('error')})
    }
    static adminregister=async(req,res)=>{
        res.render('register',{message:req.flash('error')})
    }

    static admininsert = async (req, res) => {
        try {
            const file = req.files.image
            const myimage = await cloudinary.uploader.upload(file.tempFilePath, {
                folder: 'register_image'
            })
            console.log(req.body)
            const result = new RegisterModel({
                name: req.body.name,
                email: req.body.email,
                password:req.body.password,
                image: {
                    public_id: myimage.public_id,
                    url: myimage.secure_url

                }
            })
            // await result.save()
            const { name, email, password, cpassword,image } = req.body;
            const admin = await RegisterModel.findOne({ email: email })
            if (admin) {
                req.flash('error', 'email already exists! ')
                res.redirect('/register')
            }
            else {
                if (name && email && password && cpassword) {
                    if (password == cpassword) {
                        try {
                            const hashpassword = await bcrypt.hash(password, 10)
                            const result = new RegisterModel({
                               
                                name: name,
                                email: email,
                                password: hashpassword,
                                image:{
                                  public_id: myimage.public_id,
                                  url: myimage.secure_url,
                                },
                            })
                            await result.save()
                            req.flash('success', 'registration sucessful :) , Do Login!')
                            res.redirect('/')
                        } catch (err) {
                            console.log(err)
                        }
                    }
                    else {
                        req.flash('error', 'password and confirm password doesnt match!')
                        res.redirect('/register')
                    }
                }
                else {
                    req.flash('error', 'all fields are required')
                    res.redirect('/register')
                }
            }
        } catch (err) {
            console.log(err)
        }
    }
    static verifylogin =async(req,res)=>{

        try{
            
            
          //console.log(req.body)
          const {email,password} =req.body
          if(email && password){
            const admin = await RegisterModel.findOne({email:email})
            if(admin != null){
              const ismatched = await bcrypt.compare(password,admin.password)
              if(ismatched ){
                if(admin.role=='user'){
                  const token=jwt.sign({id:admin._id},'shivanshpandey04')
                  // console.log(token)
                  res.cookie('token',token)
                  res.redirect("/home")
                }
                if(admin.role=='admin'){
                  const token=jwt.sign({id:admin._id},'shivanshpandey04')
                  // console.log(token)
                  res.cookie('token',token)
                  res.redirect("/dashboard")
                }
             
    
              }
              else{
                req.flash("error", " email or password not matched");
                res.redirect("/");
              }
            } 
            else{
              req.flash("error", "  You are not registered");
              res.redirect("/register");
            }
    
          }
          else{
            req.flash("error", "All Field are required");
            res.redirect("/");
          }
        }
        catch(err){
          console.log(err)
        }
      }

      static logout = async (req, res) => {
        try {
          res.clearCookie('token')
          res.redirect("/");
        } catch (err) {
          console.log(err);
        }
      };
  static changepassword = async (req, res) => {
    try {
      const { name,image,_id } = req.admin
      const { oldpassword, newpassword, cpassword } = req.body;
      if (oldpassword && newpassword && cpassword) {
        const user = await RegisterModel.findById(_id);
        const ismatch = await bcrypt.compare(oldpassword, user.password);
        if (!ismatch) {
          req.flash("error", "old password is not match!!");
          res.redirect("/");
        } else {
          if (newpassword != cpassword) {
            req.flash("error", "password and confirm password does not match");
            res.redirect("/");
          } else {
            const newHashpassword = await bcrypt.hash(newpassword, 10);
            await RegisterModel.findByIdAndUpdate(_id, {
              $set: { password: newHashpassword },
            });
            // alert("successfully change password!!");
            req.flash("success","password changes successfully!!")
            res.redirect("/home");
          }
        }
      } else {
        req.flash("error", "all fields are required");
        res.redirect("/");
      }
      // console.log(req.body)
    } catch (err) {
      console.log(err);
    }
  };

  static updateprofile=async(req,res)=>{
    try{
        // console.log(req.params.id)
        // console.log(req.body)
        //image delete
        const{name,image,email}=req.admin
        if(req.files){
        const profile=await RegisterModel.findById(req.admin.id)
        const imageid=profile.image.public_id
        // console.log(imageiid)
        await cloudinary.uploader.destroy(imageid)
        //image update
        const file=req.files.image
        const myimage=await cloudinary.uploader.upload(file.tempFilePath,{
        folder:'register_image'                   
        });
        var imgdata={
            name:req.body.name,
            email:req.body.email,
            image: {
                public_id: myimage.public_id,
                url: myimage.secure_url                     
            },
        }
        }else{
          var imgdata={
            name:req.body.name,
            email:req.body.email,
            }
        }
        const result=await RegisterModel.findByIdAndUpdate(req.admin.id,imgdata)
        await result.save()
         res.redirect('/home')
    }catch(err){
        console.log(err)
    }
}
static contactus=async(req,res)=>{
  try{
    const{name,image,email,_id} = req.admin
      res.render('contact',{r:image,s:name,e:email})
  }
  catch(err)
  {
    console.log(err);
  }
}

static about=async(req,res)=>{
  try{
    const{name,image,email,_id} = req.admin
      res.render('about',{r:image,s:name,e:email})
  }
  catch(err)
  {
    console.log(err);
  }
}
}
module.exports = FrontController