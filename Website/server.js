/* Require */
var express  = require('express');
var app      = express();
var port     = process.env.PORT;
var ip       = process.env.IP;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/database.js');
var mysql    = require('mysql');

/* 
**  -------------------------------------------------------
**  Configuration
**  -------------------------------------------------------
*/ 

// connect to our database
mongoose.connect(configDB.url);

// pass passport for configuration
require('./config/passport.js')(passport); 

//Get location of static webpage files ~/public/...
app.use(express.static('public'));

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({
     extended: true
})); // get information from html forms
app.use(bodyParser.json());

app.set('view engine', 'ejs'); // set up ejs for templating

//requirements for passport
app.use(session({
    secret: '9t8YCmDaQb9NcznMC0F1', //string key for encryption
    maxAge: 60*60*1000,  //expires in an hour
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

//Get location of routes
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

/* 
**  -------------------------------------------------------
**  mysql   https://codeforgeek.com/2014/09/ajax-search-box-using-node-mysql/
**  -------------------------------------------------------
*/ 

//Connects to artist DB
var connection = mysql.createConnection({
    host : process.env.IP,
    user : 'vegassolo',   //INSERT YOUR CLOUD 9 USERNAME HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    password : '',
    database : 'artists'
});

connection.connect(function(err){
    if (err) {
        console.log("SQL CONNECT ERROR: " + err);
    } else {
        console.log("SQL CONNECT SUCCESSFUL.");
    }
});

//Search DB for artist
app.get('/search',function(req,res){
	connection.query('select Name from artist where Name like "%'+req.query.key+'%"',
	function(err, rows, fields) {
		if (err) throw err;
		var data=[];
		for(var i=0;i<rows.length;i++) {
			data.push(rows[i].Name);
		}
		res.end(JSON.stringify(data));
	});
});

/* 
**  -------------------------------------------------------
**  Server Start
**  -------------------------------------------------------
*/ 
app.listen(port,ip);
console.log("IP: "+process.env.IP);
console.log("PORT: "+process.env.PORT);