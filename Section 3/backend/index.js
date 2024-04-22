// import express
const express = require('express');
const userRouter =require('./routers/userRouter');

// initialize express
const app =express();
const port =5000;
 
//middleware
app.use('/user',userRouter);

//endpoint route
app.get('/',(req,res)=>{
    res.send("Response form express")
})

app.get('/add',(req,res)=>{
    res.send("Response from add")
})

app.get('/delete',(req,res)=>{
    res.send("response form delete")
})

app.get('/update',(req,res)=>{
    res.send("response form update")
})
app.listen(port, ()=>{console.log('server started');});