const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to Mongodb server');
	const db = client.db('TodoApp');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID("5f1a9d9318b6f0d2595c921f")
	// }, {
	// 	$set: {
	// 		text: "Test note todo",
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID("5f1a87aa6890b2329857a71c")
	}, {
		$set: {
			name: "Abhay Vachhani",
			location: "8-Jalaram Society"
		}
	}, {
		returnOriginal: false
	}).then((res) => {
		console.log(res);
	});

	//client.close();
});