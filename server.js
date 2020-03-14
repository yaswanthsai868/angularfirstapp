//install and export express
const exp=require('express')

//installing and importing path module
const path=require('path');


//importing adminApp and userApp
const adminApp=require('./apis/adminApi');
const userApp=require('./apis/userApi');

//getting the express object
const app=exp();

//forwarding the request object to the admin or user api
app.use('/admin',adminApp);
app.use('/user',userApp);

//connect server.js with angular app of dist folder
app.use(exp.static(path.join(__dirname,'./dist/firstangular')));

//assign the port number
const port=3000;
app.listen(port,()=>{console.log(`Server running on the port ${port}....`);});