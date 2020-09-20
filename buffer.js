
var str = Buffer.from('12345');
var buf2 = Buffer.from('Hello');

console.log(str.toString());
console.log(buf2.copy(str,2));