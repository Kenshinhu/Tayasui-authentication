/**
 * Created by jianxinhu on 15/3/27.
 */

var bcrypt = require('./bcrypt');

var debug = require('debug')('tys-auth');

/**
 * 主要负责处理登陆认证
 * 密码验证
 * Expore `tys_auth`;
 * @type {tys_auth}
 */
module.exports = tys_auth;

function tys_auth(option){
    this.authorizeHandler = function(){}; //登陆认证处理
}

tys_auth.prototype.AccessAuthorizeHandler = function(){
    return this.authorizeHandler;
}


