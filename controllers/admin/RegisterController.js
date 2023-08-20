const BtechModel=require('../../models/btech')

class RegisterController{
    static btech= async(req,res)=>{

        try{
            const{name,image,email} = req.admin
            res.render('register/btech',{r:image,s:name,e:email})
        }catch(err)
        {
            console.log(err)
        }
    }
    static btechinsert=async(req,res)=>{
        
        try {
            const {_id}=req.admin
            const result = new BtechModel({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                gender: req.body.gender,
                date: req.body.date,
                address: req.body.address,
                college: req.body.college,
                branch: req.body.branch,
                course: req.body.course,
                user_id: _id
            })
            
            await result.save()
            // route ka url aayega hamesha jo route me dala hoga same ekdum
            res.redirect('register/btechdisplay')
        } catch (err) {
            console.log(err)
        }
    }
    static btechdisplay = async (req, res) => {
        // console.log(req.params.id)
        try {
            const{name,image,_id} = req.admin 
            // console.log(req.admin)
            const result = await BtechModel.find({user_id:_id})
            // console.log(result)
        
            res.render('register/btechdisplay', {r:image,s:name, f: result })

        } catch (err) {
            console.log(err)
        }
    }
    static btechview = async (req, res) => {
        // console.log(req.params.id)
        try {
            const{name,image,_id} = req.admin
            // console.log(req.admin.name)
            const result = await BtechModel.find({user_id:_id})
            // console.log(result)
            
            res.render('register/btechview', {r:image,s:name, f: result })


        } catch (err) {
            console.log(err)
        }
    }
    static btechedit = async (req, res) => {
        try {
            const result = await BtechModel.findById(req.params.id)
            const{name,image} = req.admin
            res.render('register/btechedit', {r:image,s:name, f: result })

        } catch (err) {
            console.log(err)
        }
    }
    static btechupdate = async (req, res) => {

        try {
           
            const result = await BtechModel.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                gender: req.body.gender,
                date: req.body.date,
                address: req.body.address,
                college: req.body.college,
                branch: req.body.branch,
                course: req.body.course,

                
            })
            await result.save()
            res.redirect('/register/btechdisplay')
        } catch (err) {
            console.log(err)
        }
    }



    static bba= async(req,res)=>{
        try{
            const{name,image,email} = req.admin
            res.render('register/bba', {r:image,s:name,e:email})
            
        }catch(err)
        {
            console.log(err)
        }
    }

    static bbadisplay = async (req, res) => {
        // console.log(req.params.id)
        try {
            const{name,image,_id} = req.admin
            const result = await BtechModel.find({user_id:_id})
            // console.log(result)
           
            res.render('register/bbadisplay', {r:image,s:name, f: result })


        } catch (err) {
            console.log(err)
        }
    }

    static bbainsert=async(req,res)=>{
        
        try {
            const {_id}=req.admin
            const result = new BtechModel({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                gender: req.body.gender,
                date: req.body.date,
                address: req.body.address,
                college: req.body.college,
                branch: req.body.branch,
                course: req.body.course,
                user_id: _id
            })
            
            await result.save()
            // route ka url aayega hamesha jo route me dala hoga same ekdum
            res.redirect('register/bbadisplay')
        } catch (err) {
            console.log(err)
        }
    }

    static bbaview = async (req, res) => {
        // console.log(req.params.id)
        try {
            const result = await BtechModel.find()
            // console.log(result)
            const{name,image} = req.admin
            res.render('register/bbaview', {r:image,s:name, f: result })
   

        } catch (err) {
            console.log(err)
        }
    }

    static bbaedit = async (req, res) => {
        try {
            const result = await BtechModel.findById(req.params.id)
            const{name,image} = req.admin
            res.render('register/bbaedit', {r:image,s:name, f: result })

        } catch (err) {
            console.log(err)
        }
    }
    static bbaupdate = async (req, res) => {

        try {
           
            const result = await BtechModel.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                gender: req.body.gender,
                date: req.body.date,
                address: req.body.address,
                college: req.body.college,
                branch: req.body.branch,
                course: req.body.course,
                
            })
            await result.save()
            res.redirect('/register/bbadisplay')
        } catch (err) {
            console.log(err)
        }
    }

    static bca= async(req,res)=>{
        try{
            const{name,image,email} = req.admin
            res.render('register/bca', {r:image,s:name,e:email})
        
        }catch(err)
        {
            console.log(err)
        }
    }

    static bcadisplay = async (req, res) => {
        // console.log(req.params.id)
        try {
            const{name,image,_id} = req.admin
            const result = await BtechModel.find({user_id:_id})
            // console.log(result)
            
            res.render('register/bcadisplay', {r:image,s:name, f: result })
            

        } catch (err) {
            console.log(err)
        }
    }

    static bcainsert=async(req,res)=>{
        
        try {
            const {_id}=req.admin
            const result = new BtechModel({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                gender: req.body.gender,
                date: req.body.date,
                address: req.body.address,
                college: req.body.college,
                branch: req.body.branch,
                course: req.body.course,
                user_id: _id
            })
            
            await result.save()
            // route ka url aayega hamesha jo route me dala hoga same ekdum
            res.redirect('register/bcadisplay')
        } catch (err) {
            console.log(err)
        }
    }

    static bcaview = async (req, res) => {
        // console.log(req.params.id)
        try {
            const result = await BtechModel.find()
            // console.log(result)
            const{name,image} = req.admin
            res.render('register/bcaview', {r:image,s:name, f: result })
            

        } catch (err) {
            console.log(err)
        }
    }

    static bcaedit = async (req, res) => {
        try {
            const result = await BtechModel.findById(req.params.id)
            const{name,image} = req.admin
            res.render('register/bcaedit', {r:image,s:name, f: result })

        } catch (err) {
            console.log(err)
        }
    }
    static bcaupdate = async (req, res) => {

        try {
           
            const result = await BtechModel.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                gender: req.body.gender,
                date: req.body.date,
                address: req.body.address,
                college: req.body.college,
                branch: req.body.branch,
                course: req.body.course,
                
            })
            await result.save()
            res.redirect('/register/bcadisplay')
        } catch (err) {
            console.log(err)
        }
    }
}
module.exports=RegisterController