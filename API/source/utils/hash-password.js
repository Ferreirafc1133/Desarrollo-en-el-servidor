const crypto = require('crypto');

module.exports = function(pwd){
    pwd = pwd ?? '';
    const hashedPwd = crypto.scryptSync(pwd,
}