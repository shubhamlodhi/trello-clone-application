const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const User = require('../Models/User.model');
const Board = require('../Models/Board.model');
const Task = require('../Models/Task.model');

const { verifyAccessToken } = require('../helpers/jwt_helper');

router.post('/',verifyAccessToken, async(req, res, next) => {

    try {
        //Validation
        // const result = await boardSchema.validateAsync(req.body)
        // console.log(result);
    
        //Check
        // const doesExist = await User.findOne({ email: req.email })
        // if(!doesExist)throw createError.Conflict(`${req.email} is not registered`)
    
    
        const task = new Task(req.body)
    
        const savedTask = await task.save();
    
    
        res.send(savedTask);
        
        // res.send('Hello From Express Server');
    
    
    
    } catch (error) {
     
        if(error.isJoi === true) error.status = 422
        next(error);
    
    }
    })


    router.post('/updatetask',verifyAccessToken, async(req, res, next) => {

        try {
            //Validation
            // const result = await boardSchema.validateAsync(req.body)
            // console.log(result);
        
            //Check
            // const doesExist = await User.findOne({ email: req.email })
            // if(!doesExist)throw createError.Conflict(`${req.email} is not registered`)
        
            const updatedTasks = await Task.updateOne({taskName:"Rahul"},{taskName: "shubham"});
            // res.send(updatedBoards);
            const userTasks = await Task.find({});
            res.send(userTasks);
            

        
        
        
        } catch (error) {
         
            if(error.isJoi === true) error.status = 422
            next(error);
        
        }
        })

        router.post('/jointask',verifyAccessToken, async(req, res, next) => {

            try {
                //Validation
                // const result = await boardSchema.validateAsync(req.body)
                // console.log(result);
            
                //Check
                // const doesExist = await User.findOne({ email: req.email })
                // if(!doesExist)throw createError.Conflict(`${req.email} is not registered`)
            
                const updatedTasks = await Task.updateOne({taskName:"Rahul"},{$addToSet:{taskMembers: ["shubham"]}});
                // res.send(updatedBoards);
                const userTasks = await Task.find({});
                res.send(userTasks);
                
    
            
            
            
            } catch (error) {
             
                if(error.isJoi === true) error.status = 422
                next(error);
            
            }
            })

        router.post('/deletetask',verifyAccessToken, async(req, res, next) => {

            try {
                //Validation
                // const result = await boardSchema.validateAsync(req.body)
                // console.log(result);
            
                //Check
                // const doesExist = await User.findOne({ email: req.email })
                // if(!doesExist)throw createError.Conflict(`${req.email} is not registered`)
            
                const deletedTasks = await Task.remove({taskMembers:"Rahul"});
                res.send(deletedTasks);
                

            
            
            
            } catch (error) {
             
                if(error.isJoi === true) error.status = 422
                next(error);
            
            }
            })

            router.get('/gettask',verifyAccessToken, async(req, res, next) => {

                try {
                    //Validation
                    // const result = await boardSchema.validateAsync(req.body)
                    // console.log(result);
                
                    //Check
                    // const doesExist = await User.findOne({ email: req.email })
                    // if(!doesExist)throw createError.Conflict(`${req.email} is not registered`)
                
                    const userTasks = await Task.find({});
                    res.send(userTasks);
                    

                
                
                
                } catch (error) {
                 
                    if(error.isJoi === true) error.status = 422
                    next(error);
                
                }
                })


            module.exports = router;    