/**
 * Created by jianxinhu on 15/3/27.
 */

var bcrypt = require('bcrypt');

var salt = bcrypt.genSaltSync(10);

exports.hash = function (str, callback) {
    bcrypt.hash(str, salt, callback);
};

exports.compare = function (str, hash, callback) {
    bcrypt.compare(str, hash, callback);
};
