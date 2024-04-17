// import express
const express = required('express')

// initialize express
const app =express();
const port =5000;

app.listen(port, ()=>{console.log('server started');});