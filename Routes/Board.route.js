const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const User = require('../Models/User.model');
const Board = require('../Models/Board.model');

const { verifyAccessToken } = require('../helpers/jwt_helper');




router.post('/', async(req, res, next) => {

try {
    //Validation
    // const result = await boardSchema.validateAsync(req.body)
    // console.log(result);

    //Check
    // const doesExist = await User.findOne({ email: req.email })
    // if(!doesExist)throw createError.Conflict(`${req.email} is not registered`)


    const board = new Board(req.body)

    const savedBoard = await board.save();


    res.send(savedBoard);
    


} catch (error) {
 
    if(error.isJoi === true) error.status = 422
    next(error);

}
})

router.put('/:id/:name',verifyAccessToken, async(req, res, next) => {

    try {
        //Validation
        // const result = await boardSchema.validateAsync(req.body)
        // console.log(result);
    
        //Check
        // const doesExist = await User.findOne({ email: req.email })
        // if(!doesExist)throw createError.Conflict(`${req.email} is not registered`)
    
        // const id = req.params.id;
        // const name = req.params.name;

        const { id,name } = req.params;

        console.log(id);

        console.log(name);

        // const updatedBoards = await Board.updateOne({boardName:"Rahul"},{boardName: "shubham"});
        // // res.send(updatedBoards);
        // const userBoards = await Board.find({});
        // res.send(userBoards);
        
        res.send("Update")
        
    
    
    
    } catch (error) {
     
        if(error.isJoi === true) error.status = 422
        next(error);
    
    }
    })

    router.post('/addmemberboard',verifyAccessToken, async(req, res, next) => {

        try {
            //Validation
            // const result = await boardSchema.validateAsync(req.body)
            // console.log(result);
        
            //Check
            // const doesExist = await User.findOne({ email: req.email })
            // if(!doesExist)throw createError.Conflict(`${req.email} is not registered`)
        
        
    
            const updatedBoards = await Board.updateOne({boardName:"Product Team"},{$addToSet:{boardMember: ["Tanmay"]}});
            // res.send(updatedBoards);
            const userBoards = await Board.find({});
            res.send(userBoards);
            
            
            
        
        
        
        } catch (error) {
         
            if(error.isJoi === true) error.status = 422
            next(error);
        
        }
        })

    router.post('/deleteboard',verifyAccessToken, async(req, res, next) => {

        try {
            //Validation
            // const result = await boardSchema.validateAsync(req.body)
            // console.log(result);
        
            //Check
            // const doesExist = await User.findOne({ email: req.email })
            // if(!doesExist)throw createError.Conflict(`${req.email} is not registered`)
        
        
            
            const deletedBoards = await Board.remove({boardMembers:"Rahul"});
            res.send(deletedBoards);
        
        
        
        } catch (error) {
         
            if(error.isJoi === true) error.status = 422
            next(error);
        
        }
        })

router.get('/getboard',verifyAccessToken, async(req, res, next) => {
    try {
        //const userBoards = await Board.find({boardMembers:"Rahul"});
        const userBoards = await Board.find({});
        res.send(userBoards);
    } catch (error) {
        next(error);
    }
    
    })


module.exports = router;