const express=require('express')
const model=require('../models/productModel')
const { route } = require('./userRouter')
const router=express.Router()

router.post('/add',(req,res)=>{
   console.log(req.body)
   new model(req.body).save()
   .then((result) => {
    res.status(200).json(result)
   }).catch((err) => {
    res.status(500).json(err)
   });
})

router.get('/getall',(req,res)=>{
    model.find()
    .then((result) => {
        res.status(200).json(result) 
    }).catch((err) => {
        res.status(500).json(err)
    });
})

router.get('/getbyid/:id',(req,res)=>{
    model.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result) 
    }).catch((err) => {
        res.status(500).json(err)
    });
})

router.delete('/delete/:id',(req,res)=>{
    model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json(result) 
    }).catch((err) => {
        res.status(500).json(err)
    });
})

router.put('/update/:id',(req,res)=>{
    model.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((result) => {
        res.status(200).json(result) 
    }).catch((err) => {
        res.status(500).json(err)
    });
})
module.exports=router