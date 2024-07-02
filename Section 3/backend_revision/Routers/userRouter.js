const express = require('express');
const model = require('../models/userModel');
const router = express.Router();
const jwt = require('jsonwebtoken')

require('dotenv').config();

router.post('/add', (req, res) => {
    console.log(req.body);
    new model(req.body).save()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ err })
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
router.get('/getbyemail/:email', (req, res) => {
    model.find({ email: req.params.email })
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).json(err)
        });
})

router.get('/getbyid/:id', (req, res) => {
    model.findById(req.params.id)
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).json(err)
        });
})

// update
router.put('/update/:id', (req, res) => {
    model.findByIdAndUpdate(req.params.id, req.body, { new: true })//first one is id and second one is body which we want to update
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).json(err)
        });
});

// delete
router.delete('/delete/:id', (req, res) => {
    model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).json(err)
        });
});

router.post('/authenticate',(req,res)=>{
    model.findOne(req.body)

    

    .then((result) => {
        if(!result){
            return res.status(401).json({message:"login failed"});
        }
        
        const {_id,name,email,password}=result
        
        const payload = {_id,name,email,password};

        jwt.sign(
            payload,
            process.env.JWT_SECRET_KEY,
            {
                expiresIn:'1h'
            },
            (err,token)=>{
                if(err){
                    console.log(err);
                    res.status(500).json(err)
                }
                else{
                    res.status(200).json(token)
                }
            }
        )
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });
})

module.exports = router;