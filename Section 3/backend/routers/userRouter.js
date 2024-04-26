const express =require('express');
const router =express.Router();
const model = require('../models/userModels');

router.post('/add',(req,res)=>{
    console.log(req.body);
   new Model(req.body).save()

});

router.get('/delete',(req,res)=>{
    res.send("Response from user delete");
})

router.get('/update',(req,res)=>{
    res.send("Response form user update");
})
router.get('/getall',(req,res)=>{
    res.send("Response form user all");
})
router.get('/getbyid',(req,res)=>{
    res.send("Response form user id");
})
module.exports=router;

