const mongoose = require('mongoose');
const url="mongodb+srv://abhayJS:abhayMern@cluster0.6kxwugb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


//asynchronous Function
mongoose.connect(url)
.then((result)=>{
    console.log('connected to db');
}).catch((err)=>{
    console.log(err);
});