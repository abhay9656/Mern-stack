const express =require('express');
const router =express.Router();

router.get('/add',(req,res)=>{
    res.send("Response from user add");

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

