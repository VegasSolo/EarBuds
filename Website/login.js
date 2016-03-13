var util = require('util');
var initreq = require('./initreq.njs');
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
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('./login.njs'+util.inspect(pre));
        
        //CODE GOES HERE

    
    cb();
};
