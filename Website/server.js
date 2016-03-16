/* Require */
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/database.js');

/* 
**  -------------------------------------------------------
**  Configuration
**  -------------------------------------------------------
*/ 

// require('./config/passport')(passport); // pass passport for configuration

// connect to our database
mongoose.connect(configDB.url);

//Get location of static webpage files ~/public/...
app.use(express.static('public'));

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs'); // set up ejs for templating

//requirements for passport
app.use(session({
    secret: '9t8YCmDaQb9NcznMC0F1', //string key for encryption
    maxAge: 60*60*1000,  //expires in an hour
    resave: false,
    saveUninitialized: true,
    cookie: {secure: true}
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

//Get location of routes
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport


/* 
**  -------------------------------------------------------
**  Routing Pages
**  -------------------------------------------------------
*/ 



/* 
**  -------------------------------------------------------
**  Process Pages
**  -------------------------------------------------------
*/ 


/* 
**  -------------------------------------------------------
**  Server Start
**  -------------------------------------------------------
*/ 
app.listen(port);