let express = require ('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect with gamemodel 
let Game = require('../models/game.js');

//we get the /controller/game.js, where all our main functions are
//done this so the code is much cleaner, and neatly separated (as taught in class)
let gameController = require('../controller/game')

//READ OPERATION (CReadUD)
//get route for game-list
router.get('/', gameController.displayGameList)

//Gets route to display an "add page"
router.get('/add', gameController.displayAddPage)

//Post operation, aka CREATE OPERATION (CRUD)
router.post('/add', gameController.processAddPage)

//EDIT page display, aka UPDATING (CRUpdateD)
router.get('/edit/:id', gameController.displayEditPage);

//EDIT process, aka UPDATING (CRUpdateD)
router.post('/edit/:id', gameController.postUpdate);

//DELETE OPERATION, aka... actually, just delete (CRUDelete)
router.get('/delete/:id', gameController.deleteRow);

//finally, of course, we export it so other files can access it, and we can actually route
module.exports = router;