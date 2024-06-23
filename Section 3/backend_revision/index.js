// import express
const express = require('express');
const UserRouter = require('./Routers/userRouter');
const ProductRouter = require('./Routers/productRouter')
// initialize express
const app = express();

const port = 5500;

// middleware
app.use(express.json());
app.use('/user', UserRouter);
app.use('/product',ProductRouter)
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