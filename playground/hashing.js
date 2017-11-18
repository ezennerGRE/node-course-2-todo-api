const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
	id: 10
};
var token = jwt.sign(data,'123abc');

console.log(token);

var decoded = jwt.verify(token,'123abc');
console.log('Decoded:',decoded);
// jwt.verify
// var message = 'I AM USER MAN';
// var hash = SHA256(message).toString();

// console.log(`Message : ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
// 	id: 4
// };
// var token = {
// 	data,
// 	hash: SHA256(JSON.stringify(data) + 'imasecret').toString()
// }

// var resultHash = SHA256(JSON.stringify(data) + 'imasecret').toString();

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// if (resultHash === token.hash){
// 	console.log('data not changed');
// } else{
// 	console.log('data changed. LIAR');
// }

