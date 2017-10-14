const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// var id = '59dbbcfdd9847961dc6f9b34b';

// if (!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// }
// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos',todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todos',todo);
// });

// Todo.findById(id).then((todo) => {
// 	if (!todo){
// 		return console.log('ID not found');
// 	}
// 	console.log('Todo By ID',todo);
// }).catch((e) => {
// 	console.log("Error: ", e);
// })

const {User} = require('./../server/models/user');
var userId = '59daf97f428b1a571bdf181b';

User.findById(userId).then((user) => {
	if (!user){
		return console.log('User not found');
	}
	console.log('User by ID:',user);
}).catch((e) => {
	console.log('Error: ', e);
});

