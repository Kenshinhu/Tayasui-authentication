/**
 * Created by jianxinhu on 15/4/10.
 */
var auth = require("../lib/auth");

var tys_auth = new auth();

describe(require('path').basename(__filename), function () {

    it('success',function(done){

        tys_auth.AccessAuthorizeHandler = function(){
            done();
        }

        tys_auth.AccessAuthorizeHandler();

    });

});