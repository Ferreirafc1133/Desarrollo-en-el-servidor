const crypto = require('crypto');

const pwd = 'hola123';

const hashedPwd = crypto.scryptSync(pwd, 'salt', 24).toString('hex');

console.log('Password hash: ', hashedPwd);