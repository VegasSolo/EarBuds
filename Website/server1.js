/* Require */
var http = require("http");
var fs = require('fs');
var url = require('url');
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);

/* Vars */
var PORT = process.env.PORT;
var IP = process.env.IP;;
var app = express();

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//Get location of static webpage files ~/public/...
app.use(express.static('public'));

//Initialize sessions
app.use(session({
    secret: '9t8YCmDaQb9NcznMC0F1', //string key for encryption
    maxAge: 60*60*1000,  //expires in an hour
    resave: false,
    saveUninitialized: true,
    cookie: {secure: true}
}))

/*  
**  -------------------------------------------------------
**  To add pages to the routing use:
**  app.get(</page>, function(req,res)){}   **FOR GET
**  OR
**  app.post(</page>, urlencodedParser, function(req,res)){}  **FOR POST
**  -------------------------------------------------------
**  Check if a session exists:
**  if(req.session.user){}
**
**  Destroy a session:
**  req.session.destroy(function(err){
**      if(err){
**          console.log(err);
**      }
**  });
**  -------------------------------------------------------
*/  

/* 
**  -------------------------------------------------------
**  Routing Pages
**  -------------------------------------------------------
*/ 

//Login page
app.get('/', function(req,res){
    if(req.session.user){
        res.sendFile(__dirname+'/'+'profile.html');
    }
    else{
        res.sendFile(__dirname+'/'+'login.html');
    }
})
app.post('/', urlencodedParser, function(req,res){
    if(req.session.user){
        res.sendFile(__dirname+'/'+'profile.html');
    }
    else{
        res.sendFile(__dirname+'/'+'login.html');
    }
})

//User Page
app.get('/profile', function(req,res){
    res.sendFile(__dirname+'/'+'profile.html');
})
app.post('/profile', urlencodedParser, function(req,res){
    res.sendFile(__dirname+'/'+'profile.html');
})

/* 
**  -------------------------------------------------------
**  Process Pages
**  -------------------------------------------------------
*/ 

//Process login
app.post('/POST_login', urlencodedParser, function(req,res){
    //check if in a session
    if(req.session.user && req.session){
     
        res.sendFile(__dirname+'/'+'profile.html');  
    }
    else{
        req.session.user = req.body.user;
        req.session.fname = req.body.fname;
        req.session.lname = req.body.lname;
        req.session.email = req.body.email;
        res.sendFile(__dirname+'/'+'profile.html');
    }
})

//Process logout
app.post('/POST_logout', urlencodedParser, function(req,res){
    req.session.destroy(function(err){
        if(err){
            console.log(err);
        }
    });
    res.sendFile(__dirname+'/'+'login.html');
})

/* 
**  -------------------------------------------------------
**  Server Start
**  -------------------------------------------------------
*/ 

var server = app.listen(PORT, function(){
    console.log('Server listening at http://%s:%s', IP, PORT);
})