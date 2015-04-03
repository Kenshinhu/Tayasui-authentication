/**
 * Created by jianxinhu on 15/3/27.
 */
var debug = require('debug')('tys-auth');
var auth = require('./lib/auth');
var fs = require('fs');
var bodyParser = require('body-parser');

var tys_auth = new auth();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var _;

var tasy_auth = function(router){

    this.loginUrl = '/login';

    this.loginHtml = fs.readFileSync('login.html');

    this.AppRouter = router;

    debug("loginHtml: %s",this.loginHtml);



    this.interceptHandler = function(){
        return 1;
    };

    _ = this;

};

tasy_auth.prototype.router =function(){



    return setupMapping(this.AppRouter);
}

tasy_auth.prototype.all = function(req,res,next){

  if(_.interceptHandler(req) == 0){
      res.send("资源受限");
      res.end();
  }else{
      next();
  }
}

tasy_auth.prototype.get = function(url,handler){
    this.AppRouter.get(url,this.all,handler);
}


function setupMapping(router){

    var r = router;

    r.get(_.loginUrl,function(req,res,next){
        debug("to LoginPage");
        var html = fs.readFileSync('login.html');
        res.set('Content-Type', 'text/html');
        res.send(html);
    });

    r.post(_.loginUrl,urlencodedParser,function(req,res,next){

        debug("req.body : "+JSON.stringify(req.body,'','\t'));

        var loginUser = req.body.loginUser;
        var loginPassword = req.body.loginPassword;

        tys_auth.loginAuthentication(loginUser,loginPassword,function(err,isSuccess){
            res.send("login is "+(isSuccess? "ok" : 'Fail'));
        });
    });

    return r;
}


module = module.exports = tasy_auth;