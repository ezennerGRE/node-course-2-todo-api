// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
	if (error){
		return console.log('Unable to conenct to MongoDB Server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err){
	// 		return console.log('Unable to insert to do', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops));
	// });

	// Insert new doc into Users (name, age, locationString)
	// db.collection('Users').insertOne({
	// 	name: 'Eric Zenner',
	// 	age: 29,
	// 	locationString: 'San Francisco'
	// }, (err, result) => {
	// 	if (err){
	// 		return console.log('Error inserting', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
	// })
	db.close();
});