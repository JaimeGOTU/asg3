let express = require('express');
let router = express.Router();

//In here we have all the redirects for all of our pages
//As well as establishing each page's respective title
module.exports.displayHomePage = (req,res,next)=>{
    res.render('index', { 
    title: 'Home Page'});
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', { 
      title: 'About Me',
      });
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('index', { 
      title: 'Projects',
      });
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('index', { 
      title: 'Contact Me',
      });
}
//these then get used in the /routes/index.js