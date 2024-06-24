const express = require('express')
const model= require('../models/feedModel')
const router=express.Router()


router.post('/add',(req,res)=>{
    console.log(req.body);
    new model(req.body).save().
    then((result) => {
        
        res.status(200).json(result)
    }).catch((err) => {
        res.status(500).json(err)
    });
})

module.exports = router;