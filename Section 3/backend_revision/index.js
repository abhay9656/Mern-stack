// import express
const express = require('express');
const UserRouter = require('./Routers/userRouter');
const FeedRouter = require('./Routers/feedRouter');
const ProductRouter=require('./Routers/productRouter');
const cors =require('cors')
// initialize express
const app = express();

const port = 5500;
app.use(cors({
    origin:'http:/localhost:3000'
}))
// middleware
app.use(express.json());
app.use('/user', UserRouter);
app.use('/feed',FeedRouter)
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