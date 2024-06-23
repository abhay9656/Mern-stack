const {Schema,model}=require('../connection')
const mySchema=new Schema({
    name:{type:String},
    title:{type:String},
    image:{type:String},
    createdAt:{type:Date}
})

module.exports=model('product',mySchema)