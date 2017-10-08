// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
	if (error){
		return console.log('Unable to conenct to MongoDB Server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log('Todos');
	// 	console.log(`Todos count: ${count}`);
	// }, (err) => {
	// 	console.log('unable to fetch todos', errs)
	// });
	db.collection('Users').find({
			name: 'Eric Zenner'
	}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs,null, 2));
	}, (err) => {
		console.log('unable to fetch todos', errs)
	});
	// db.close();
});