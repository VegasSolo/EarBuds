/* Require */
var http = require("http");
var fs = require('fs');
var url = require('url');
var express = require('express');
var bodyParser = require('body-parser');

/* Vars */
var PORT = process.env.PORT;
var IP = process.env.IP;;
var app = express();

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//Get location of static webpage files
app.use(express.static('public'));

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
    res.end('Succesfully recieved login request for User:'+req.query.user);
})

//server start
var server = app.listen(PORT, function(){
    console.log('Server listening at http://%s:%s', IP, PORT);
})