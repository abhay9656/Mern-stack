// import express
const express = require('express');
const UserRouter = require('./Routers/userRouter');

// initialize express
const app = express();

const port = 5500;

// middleware
app.use('/user', UserRouter);

// endpoint or route
app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/add', (req, res) => {
    res.send('response from add');
});

app.listen(port, () => {
    console.log('server started ');
});