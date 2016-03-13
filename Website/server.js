/* Require */
var http = require("http");
var login = require("./login.njs");
var static = require('node-static');
var url = require('url');

/* Vars */
var PORT = process.env.PORT;
var IP = process.env.IP;
var file = new static.Server();

http.createServer(function (req,res) {
    if(url.parse(req.url).pathname == ''){
        login.serve(req,res);
    }
    else{
        file.serve(req,res);
    }
}).listen(PORT, IP);
console.log("Server connected at "+IP+";"+PORT);

