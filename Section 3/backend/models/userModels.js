const { model,Schema }=require('../connection');
const myschema=new Schema({
    name:{type:String,require:true},
    email:{type:String,unique:true},
    password:String,
    createdAt:{type:Date,default:Date.now}
})
module.exports=model('user',myschema)
