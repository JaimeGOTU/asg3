//Of course, we require express and mongoose, very important
let express = require ('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect with our model of an element in the table, wich is in this specified in this file
let Game = require('../models/game.js');

//exports so it can be used in the routes folder
//this one shows us the table
module.exports.displayGameList = (req,res,next)=>{
    Game.find((err, Gamelist) =>{
        if (err)
        {
            return console.error(err);
        }
        else 
        {
            console.log(Gamelist);
            res.render('game/list',{
                title:'Games', 
                Gamelist: Gamelist
            })
        }
    })
}
//this one shows us the "add game" page
module.exports.displayAddPage = (req,res,next)=>{
    res.render('game/add',{title:'Add Game'})
}

//this one actually posts the data to the table
module.exports.processAddPage = (req,res,next)=>{
    let newGame = Game ({
        //enter all this data in a form
        "title":req.body.title,
        "completed":req.body.completed,
        "hours":req.body.hours,
        "comments":req.body.comments,
        "rating":req.body.rating
    });
    //attempt to create a game, checking for errors first
    Game.create(newGame,(err,Game)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/game-list');
        }
    })

}

//this one shows us the edit page (very similar to the add one)
module.exports.displayEditPage = (req,res,next)=>{
    let id = req.params.id;
    Game.findById(id,(err,gameToEdit)=>{
        //the usual error-check
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        //if successful displays the edit page
        else
        {
            res.render('game/edit',{title:'Edit Game', game:gameToEdit});
        }
    })}
//this one actually process the edition of the file, and posts it on the table (aka updates it)
module.exports.postUpdate = (req,res,next)=>{
    let id=req.params.id;
    let updateGame = Game({
        "_id":id,
        "title":req.body.title,
        "completed":req.body.completed,
        "hours":req.body.hours,
        "comments":req.body.comments,
        "rating":req.body.rating
    });
    Game.updateOne({_id:id},updateGame,(err)=>{
        //the usual error-check
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        //if successful updates the table and redirects to the list so you can see the change
        else
        {
            res.redirect('/game-list');
        }
    });
}
//this one deletes an element in the table
module.exports.deleteRow = (req,res,next)=>{
    //we deleteOne with that specific id
    let id = req.params.id;
    Game.deleteOne({_id:id},(err)=>{
        //the usual error-check
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        //if successful deletes it and shows you the list so you can show its deleted
        else
        {
            res.redirect('/game-list');
        }
    });
}