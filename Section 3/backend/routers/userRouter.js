const express =require('express');
const router =express.Router();

router.get('/add',(req,res)=>{
    res.send("Response from user add");

});

router.get('delete',(req,res)=>{
    res.send("Response from user delete");
})
module.exports=router;

