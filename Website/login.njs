var util = require('util');
var session = {};

function page(req,res,pre,cb){
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('./login.njs'+util.inspect(pre));
        
        if(pre._GET['x'])

    
    cb();
};

exports.serve = function(req,res){
    var pre = {};
    initGET(req,pre, function(){
        initPOST(req,res,pre, function(){
            initCOOKIE(req,res,pre,function(){
                initREQUEST(req,res,pre,function(){
                    initSESSION(req,res,pre,function(){
                    
                    });
                });
            });
        });
    });
}