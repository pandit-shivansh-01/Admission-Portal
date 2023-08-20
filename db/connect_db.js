const moongose =require('mongoose')
const url = "mongodb+srv://shivanshpandey506:shivansh04@cluster0.kcelvzc.mongodb.net/?retryWrites=true&w=majority"
            
const connectDB = ()=>{
    return moongose.connect(url)
    .then(()=>{
        console.log('connection sucessful')
    }).catch((err)=>{
        console.log(err)
    })
}
module.exports = connectDB;