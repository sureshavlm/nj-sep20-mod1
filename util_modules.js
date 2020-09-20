


const os = require('os');

console.log('The OS is: ',os.platform());

console.log(os.cpus().length);


const util = require('util');

var str = 'Congratualtions %s on his %d birth anniversary';
var out = util.format(str, 'John', 28);

console.log(out);


/*const url = require('url');

var link = 'http://www.google.com';

var str = url.parse(link);

console.log(str.host);

console.log(str.pathname);
console.log(str);*/
