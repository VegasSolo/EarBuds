var http = require('http');
const PORT = process.env.PORT;
const HOST = process.env.IP;
var server = http.createServer(handleRequests);
var dispatcher = require('httpdispatcher');


    server.listen(PORT, HOST);

    //Handler
    function handleRequests(request,response){
        try{
            console.log(request.url);
            
            dispatcher.dispatch(request, response);
        }catch(err){
            console.log(err);
        }
    }

    //where static files are stored
    dispatcher.setStatic("../Database");
    
    //login screen
    dispatcher.onGet("/login", function(req,res){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Login Page');
    });
    
    //profile screen
    dispatcher.onGet("/profile", function(req,res){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Profile Page');
    });
    
    //add other pages here...