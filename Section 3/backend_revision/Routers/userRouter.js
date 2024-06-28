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

router.get('/getbyid/:id',(req,res)=>{
    model.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(500).json(err)
    });
})

// update
router.put('/update/:id', (req, res) => {
    model.findByIdAndUpdate(req.params.id,req.body,{new : true})//first one is id and second one is body which we want to update
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(500).json(err)
    });
});

// delete
router.delete('/delete/:id', (req, res) => {
    res.send('response from user delete');
 model.findByIdAndDelete(req.params.id)
.then((result) => {
    res.status(200).json(result)
}).catch((err) => {
    res.status(500).json(err)
});
});

module.exports = router;