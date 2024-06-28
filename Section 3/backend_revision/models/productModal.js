const {Schema,model}=require('../connection')

const mySchema =new Schema({
    name:String,
    price:String,
    category:String,
    image:String,
    createdAt:{type:Date}
})
module.exports=model('product',mySchema)