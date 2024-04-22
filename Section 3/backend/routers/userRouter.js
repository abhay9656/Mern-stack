const express =require('express');
const router =express.Router();

router.get('/add',(res,req)=>{
    res.send("Response from user add");

});
module.exports=router;