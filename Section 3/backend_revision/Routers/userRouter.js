const express = require('express');
const model =require('../models/userModel');
const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);
    new model(req.body).save()
    .then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({err})
    })
});

// getall
router.get('/getall', (req, res) => {
    model.find()
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(500).json(err)
    });
});

// : denotes url parameter
router.get('/getbyemail/:email',(req,res)=>{
    model.find({email:req.params.email})
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(500).json(err)
    });
})

// update
router.get('/update', (req, res) => {
    res.send('response from user update');
});

// delete
router.get('/delete', (req, res) => {
    res.send('response from user delete');
});

module.exports = router;