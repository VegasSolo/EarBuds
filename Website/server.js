/* Hello, World! program in node.js */
var http = require("http");
var static = require('node-static');
var PORT = process.env.PORT;
var IP = process.env.IP;
var file = new static.Server();

http.createServer(function (req,res) {
    file.serve(req,res);
}).listen(PORT, IP);
console.log("Server connected at "+IP+";"+PORT);

