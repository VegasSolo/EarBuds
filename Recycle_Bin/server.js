/* Require */
var http = require("http");
var fs = require('fs');
var login = require("./login.js");
var static = require('node-static');
var url = require('url');

/* Vars */
var PORT = process.env.PORT;
var IP = process.env.IP;
var file = new static.Server();

http.createServer(function (req,res) {
    var pathname = url.parse(req.url).pathname;
    console.log('Request for '+pathname+' recieved.');
    
        if(pathname == '/login.js'){
            login.serve(req,res);
        }
        else{
            file.serve(req,res);
        }
}).listen(PORT, IP);
console.log("Server connected at "+IP+":"+PORT);

