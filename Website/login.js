
var initreq = require('./initreq.js');
var session = {};

exports.serve = function(req,res){
    var pre = {};
    initreq.initGET(req,pre, function(){
        initreq.initPOST(req,res,pre, function(){
            initreq.initCOOKIE(req,res,pre,function(){
                initreq.initREQUEST(req,res,pre,function(){
                    initreq.initSESSION(req,res,pre,function(){
                        var cookies = [];
                        for ( var c in pre._COOKIE) {
                            cookies.push(c + '=' + pre._COOKIE[c]);
                        }
                        res.setHeader('Set-Cookie', cookies);
                        res.writeHead(200, {'Content-Type': 'text/plain'});
                        res.end(res.content);
                    });
                });
            });
        });
    });
}


function page(req,res,pre,cb){
    res.writeHead(400, '404 not found', {'content-type': 'text/html'});
    
    //VARS
    var content = '';   //Store html text in this variable that displays at the end
    
        //CODE GOES HERE
        
        
    res.end(content);
    cb();
};
