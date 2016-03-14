/* Require */
var http = require("http");
var fs = require('fs');
var url = require('url');
var express = require('express');

/* Vars */
var PORT = process.env.PORT;
var IP = process.env.IP;;
var app = express();

//Get location of static webpage files
app.use(express.static('public'));

/*  
**  -------------------------------------------------------
**  To add pages to the routing use:
**  app.get(</page>, function(req,res)){}   **FOR GET
**  OR
**  app.post(</page>, function(req,res)){}  **FOR POST
**  -------------------------------------------------------
*/  

//Main page GET
app.get('/', function(req,res){
    res.sendFile(__dirname+'/'+'main.html');
})

//Main page POST
app.post('/', function(req,res){
    res.sendFile(__dirname+'/'+'main.html');
})

//Process login GET
app.get('/GET_login', function(req,res){
    res.end('Succesfully recieved login request for User:'+req.query.user);
})

//server start
var server = app.listen(PORT, function(){
    console.log('Server listening at http://%s:%s', IP, PORT);
})


