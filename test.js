/**
 * Created by jianxinhu on 15/3/27.
 */
var express = require('express');
var app = express();
var router = express.Router();

var tys_auth = require('./index');
var auth = new tys_auth(router);

auth.interceptHandler = function(req){


    return (new Date()).getTime() %2 == 0 ? 1 : 0;
};
app.use('/',auth.router());

app.get('/intro',function(req,res){
    res.send("this is intro")
})

auth.get('/protect',function(req,res,next){

    res.send("这是受保护的资源");

});

app.listen(18888,function(){
    console.log("success");
});