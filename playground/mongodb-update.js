// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
	if (error){
		return console.log('Unable to conenct to MongoDB Server');
	}
	console.log('Connected to MongoDB server');

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID("59da6e64053ae8f3627dc24e")
	},{
		$set: {
			name: "EMZ"
		},
		$inc : {
			age : 1
		}
	},{
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	})

	db.close();
});