//create mini express application to handle admin reqs
const exp=require('express')
const adminApp=exp.Router();
adminApp.get('/readprofile/:username',(req,res)=>{
    res.send({message:'Read profile works'});
});

//database collection of admin
var dbo=require("../db")
dbo.initDb();

adminApp.post('/login',(req,res)=>{
    res.send({message:"Admin login works"});
});

//exporting the adminApp
module.exports=adminApp;