var http = require('http');
var static = require('node-static');
var file = new static.Server();
var url = require('url');
var index = require('./index.njs');
var login = require('./login.njs');
var admin_index = require('./admin/index.njs');
var admin_login = require('./admin/login.njs');

<<<<<<< HEAD
http.createServer(function (req, res) {
    if (url.parse(req.url).pathname == '/main.php') {
        index.serve(req, res);
    } else if (url.parse(req.url).pathname == '/login.php') {
        login.serve(req, res);
    } else if (url.parse(req.url).pathname == '/admin/index.php') {
        admin_index.serve(req, res);
    } else if (url.parse(req.url).pathname == '/admin/login.php') {
        admin_login.serve(req, res);
    } else {
        file.serve(req, res);
=======
http.createServer(function (req,res) {
    if(url.parse(req.url).pathname == '/login.php'){
        login.serve(req,res);
    }
    else{
        file.serve(req,res);
>>>>>>> 11e4b0c568a56edbbc5e9323410fe5ef0b5d09e8
    }
}).listen(process.env.PORT, process.env.IP);

console.log('Server connected at process.env.IP:process.env.PORT');
console.log('Server live at https://earbuds-vegassolo.c9users.io');
