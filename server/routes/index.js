let express = require('express');
let router = express.Router();
let indexController = require("../controller/index")

//All of the routing is done here.
//The functions for the actual redirects / routing are in the controller
//this way everything is much cleaner
//extremely similar in structure to the game route, but much simpler
router.get('/', indexController.displayHomePage);

router.get('/home', indexController.displayHomePage);

router.get('/about', indexController.displayAboutPage);

router.get('/projects', indexController.displayProjectsPage);

router.get('/contactme', indexController.displayContactPage);

module.exports = router;