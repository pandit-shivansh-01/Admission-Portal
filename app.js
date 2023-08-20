const express = require('express')
const app=express()
const port =3100
const connectDB=require('./db/connect_db')
const cloudinary = require('cloudinary')
var session = require('express-session')
var flash = require('connect-flash');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))

// file uploader
const fileUpload = require("express-fileupload");
const { Router } = require('express')
app.use(fileUpload({useTempFiles: true}));
//session and flash use 
app.use(session({
  secret: 'secret',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false,
  
}));
app.use(bodyParser.json())

app.use(flash());

//setup ejs
app.set('view engine','ejs')
//link public folder
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
//database connection
connectDB();
//web routing link 
const router= require('./routes/web.js')
//router load
app.use('/',router)

//server create
app.listen(port,()=>{
    console.log(`the server started at port number: ${port}`)
})