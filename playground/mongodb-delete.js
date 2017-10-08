// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
	if (error){
		return console.log('Unable to conenct to MongoDB Server');
	}
	console.log('Connected to MongoDB server');

	// deleteMany
	// db.collection('Todos').deleteMany({
	// 	"text": "Do coding course"
	// }).then((result) => {
	// 	console.log(result);
	// });

	// deleteOne
	// db.collection('Todos').deleteOne({
	// 	text: "Eat lunch"
	// }).then((result) => {
	// 	console.log(result);
	// });
	// findOneAndDelete
	// db.collection('Todos').findOneAndDelete({
	// 	completed: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('Users').deleteMany({
	// 	"text": "Do coding course"
	// }).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndDelete({
		_id: new ObjectID("59da6d43ef5bce447a1eb16e")
	}).then((result) => {
		console.log(result);
	});



	db.close();
});