//creating mini express application
const exp=require('express')
const userApp=exp.Router();

//importing bcrypt
const bcrypt=require("bcrypt");

//importing json web token
const jwt=require('jsonwebtoken')

//connect the database
var dbo=require('../db')
dbo.initDb()
userApp.use(exp.json());

userApp.get('/readprofile/:username',(req,res)=>{
    res.send({message:"read profle is successful"});
});


userApp.post('/register',(req,res)=>{
    var userCollectionObject=dbo.getDb().userCollectionObject;
    userCollectionObject.findOne({user:req.body.user},(err,obj)=>{
        if(err)
        {
            console.log('Error in find',err);
        }
        else if(obj!=null)
        {
            res.send({message:'User already exists'});
        }
        else
        {
            bcrypt.hash(req.body.pass,7,(err,hashed)=>{
                if(err)
                {
                    console.log("Error in hashing",err);
                }
                else
                {
                    req.body.pass=hashed;
                    userCollectionObject.insertOne(req.body,(err,success)=>{
                        if(err)
                        {
                            console.log("Error in insert",err);
                        }
                        else
                        {
                            res.send({message:"Registration successful"});
                        }
                    });
                }
            });
            
        }
    })
});


//login request handler

userApp.post('/login',(req,res)=>{
    var userCollectionObject=dbo.getDb().userCollectionObject;
    userCollectionObject.findOne({user:req.body.user},(err,usrObj)=>{
        if(err)
        {
            console.log('error in find',err)
        }
        else if(usrObj==null)
        {
            res.send({message:"Username doesn't exist"})
        }
        else
        {
            bcrypt.compare(req.body.pass,usrObj.pass,(err,status)=>{
                if(err)
                {
                    console.log('error in password comparision',err);
                }
                else if(status==false)
                {
                    res.send({message:'Invalid password'})
                }
                else
                {
                    jwt.sign({username:usrObj.user},'yas',{expiresIn:60},(err,token)=>{
                        if(err)
                        {
                            console.log('error in token generation',err)
                        }
                        else
                        {
                            res.send({token:token,message:usrObj.user})
                        }
                    })
                }
            })
        }
    })
})


//exporting the userapp
module.exports=userApp;