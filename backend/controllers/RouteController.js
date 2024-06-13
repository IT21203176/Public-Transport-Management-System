const express = require('express')
var router = express.Router()
var ObjectID= require('mongoose').Types.ObjectId

var { Route } = require('../models/Route')

router.get('/',(req,res)=>{
    Route.find((err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log(JSON.stringify(err,undefined,2))
        }
    })
})

router.get('/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send(req.params.id)
    }

    Route.findById(req.params.id,(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log(JSON.stringify(err,undefined,2))
        }
    })
})

router.post('/',(req,res)=>{
    var newRecord= new Route({
        name: req.body.name,
        vehicle_num: req.body.vehicle_num,
        driver: req.body.driver,
        time: req.body.time,
        date: req.body.date,
        price: req.body.price,
        descrption: req.body.descrption
    })

    newRecord.save((err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log(err)
            res.status(200).send({"err":"error"})
        }
    })
})

router.put('/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send(req.params.id)
    }

    var updateRecords= {
        name: req.body.name,
        vehicle_num: req.body.vehicle_num,
        driver: req.body.driver,
        time: req.body.time,
        date: req.body.date,
        price: req.body.price,
        descrption: req.body.descrption
    }

    Route.findByIdAndUpdate(req.params.id, { $set: updateRecords},{new:true}, (err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log(err)
            res.status(200).send({"err":"error"})
        }
    })
})

router.delete('/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send(req.params.id)
    }

    Route.findByIdAndRemove(req.params.id,(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

module.exports = router