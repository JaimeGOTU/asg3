//3rd party packages and stuff, we can see them in package.json
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

//configure mongoDB
let mongoose = require('mongoose');
let DB = require('./db');

//point mongoose to DataBase URI
mongoose.connect(DB.URI);
let mongoDB = mongoose.connection; //not a function
mongoDB.on('error',console.error.bind(console,'Connection Error')); //checks for a connection error
mongoDB.once('open', ()=>{
console.log('MongoDB connection successful. We are in B)'); //when it opens, confirmation message on console
})

//both our routers folder
let indexRouter = require('../routes/index');
let gamesRouter = require('../routes/game');

//creating application
let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

//necessary for express
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

app.use('/', indexRouter);  
// localhost:3000/ , in this case, because only '/'
//so when we are in that "family" per say, we use indexRouter

app.use('/game-list',gamesRouter); 
//so it's straightforward when coding on other files
//essentially, for the family of "/game-list/edit" and "/game-list/add", etc

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
//error for if someone is trying to access a site we've not mentioned
//aka, a route that is not routed (eg. "/complaints" when we never made that)

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',
  {
    title:"Error"
  });
});

module.exports = app;
//to make it accessible to the whole project we export it