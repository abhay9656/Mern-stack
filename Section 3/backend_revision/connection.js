const mongoose = require('mongoose');
const url="mongodb+srv://abhayJS:abhayMern@cluster0.6kxwugb.mongodb.net/backend?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(url)
.then((result) => {
    console.log('connected to database');
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;  