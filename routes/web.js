const express = require('express')
const FrontController = require('../controllers/FrontController')
const RegisterController=require('../controllers/admin/RegisterController')
const admin_auth = require('../middleware/auth')
const CollegeController = require('../controllers/CollegeController')



const router = express.Router()

// router.get('/',(req,res)=>{
//     res.send('hello world')
// })
router.get('/home',admin_auth,FrontController.home)
router.get('/',FrontController.login)
router.get('/register',FrontController.adminregister)
router.post('/adminregister',FrontController.admininsert)
router.post('/verify_login',FrontController.verifylogin)
router.get('/logout',admin_auth,FrontController.logout)
router.post('/updateprofile',admin_auth,FrontController.updateprofile)
router.get('/contact',admin_auth,FrontController.contactus)
router.get('/about',admin_auth,FrontController.about)
// router.get('/profile',FrontController.profile)
router.post('/changepassword',admin_auth,FrontController.changepassword)

// ================== RegisterController   btech=====================
router.get('/register/btech',admin_auth,RegisterController.btech)
router.post('/btechinsert',admin_auth,RegisterController.btechinsert)
router.get('/register/btechdisplay',admin_auth,RegisterController.btechdisplay)
router.get('/register/btechview/:id',admin_auth,RegisterController.btechview)
router.get('/register/btechedit/:id',admin_auth,RegisterController.btechedit)
router.post('/btechupdate/:id',admin_auth,RegisterController.btechupdate)


// ================== RegisterController   bba=====================
router.get('/register/bba',admin_auth,RegisterController.bba)
router.post('/bbainsert',admin_auth,RegisterController.bbainsert)
router.get('/register/bbadisplay',admin_auth,RegisterController.bbadisplay)
router.get('/register/bbaview',admin_auth,RegisterController.bbaview)
router.get('/register/bbaedit/:id',admin_auth,RegisterController.bbaedit)
router.post('/bbaupdate/:id',admin_auth,RegisterController.bbaupdate)


// ================== RegisterController   bca=====================
router.get('/register/bca',admin_auth,RegisterController.bca)
router.post('/bcainsert',admin_auth,RegisterController.bcainsert)
router.get('/register/bcadisplay',admin_auth,RegisterController.bcadisplay)
router.get('/register/bcaview',admin_auth,RegisterController.bcaview)
router.get('/register/bcaedit/:id',admin_auth,RegisterController.bcaedit)
router.post('/bcaupdate/:id',admin_auth,RegisterController.bcaupdate)

// ==================college component=================
router.get('/college/dashboard',admin_auth,CollegeController.dashboard)
router.get('/admin/display',admin_auth,CollegeController.displaydata)
router.post('/update_approve/:id',admin_auth,CollegeController.update_approval)


module.exports=router