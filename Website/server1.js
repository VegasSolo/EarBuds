/* Require */
var http = require("http");
var fs = require('fs');
var url = require('url');
var express = require('express');
var bodyParser = require('body-parser');
var session = require('client-sessions');
var cookieParser = require('cookie-parser');

/* Vars */
var PORT = process.env.PORT;
var IP = process.env.IP;;
var app = express();

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//Get location of static webpage files
app.use(express.static('public'));

//Initialize cookieParser
app.use(cookieParser());

//Initialize sessions
app.use(session({
    cookieName: 'session', //name of cookie
    secret: '9t8YCmDaQb9NcznMC0F1', //string key for encryption
    duration: 2 * 60 * 60 * 1000, //how long the session is active in ms
    activeDuration: 10 * 60 * 1000 //how long the duration can be extended after use
}))

/*  
**  -------------------------------------------------------
**  To add pages to the routing use:
**  app.get(</page>, function(req,res)){}   **FOR GET
**  OR
**  app.post(</page>, urlencodedParser, function(req,res)){}  **FOR POST
**  -------------------------------------------------------
*/  

//Main page GET
app.get('/', function(req,res){
    res.sendFile(__dirname+'/'+'login.html');
})

//Main page POST
app.post('/', urlencodedParser, function(req,res){
    res.sendFile(__dirname+'/'+'login.html');
})

//Process login POST
app.post('/POST_login', urlencodedParser, function(req,res){
    //set user to a session var
    if(req.session && req.session.user){
        req.session.user = req.body.user;
    }
    else{
        req.session.user = req.body.user;
        req.session.fname = req.body.fname;
        req.session.lname = req.body.lname;
        req.session.email = req.body.email;
    }
        
    
    res.end('Succesfully recieved login request for User: '+req.session.user);
})

//server start
var server = app.listen(PORT, function(){
    console.log('Server listening at http://%s:%s', IP, PORT);
})