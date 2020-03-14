//installing and importing the mogodb
const mongodb=require("mongodb").MongoClient

var dbo,userCollectionObject,adminCollectionObject;

const dburl='mongodb+srv://nani868:Nani1211@cluster0-vaxak.mongodb.net/test?retryWrites=true&w=majority';

//getting the database collection object
function initDb()
{
    mongodb.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true},(err,client)=>{
        if(err)
        {
            console.log("error in connecting",err);
        }
        else
        {
            dbo=client.db('mydatabase');
            userCollectionObject=dbo.collection('user');
            adminCollectionObject=dbo.collection('admin');
            console.log("Db connected");
        }
    });
}

//getting the database
function getDb()
{
    return {
        userCollectionObject:userCollectionObject,
        adminCollectionObject:adminCollectionObject
    }
}
module.exports={
    getDb,
    initDb
}