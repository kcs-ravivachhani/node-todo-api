const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to Mongodb server');
	const db = client.db('TodoApp');

	// db.collection('Todos').find({
	// 	_id: new ObjectID("5f1a87aa6890b2329857a71b")
	// }).toArray()
	// 	.then((docs) => {
	// 		console.log('Todos');
	// 		console.log(JSON.stringify(docs, undefined, 2));
	// 	}, (err) => {
	// 		console.log('Unable to fetch todos ', err);
	// 	});

	// db.collection('Todos').find().count()
	// 	.then((count) => {
	// 		console.log(`Todo counts: ${count}`);
	// 	}, (err) => {
	// 		console.log('Unable to fetch todos ', err);
	// 	});

	db.collection('Users').find({
		name: "Ravi Vachhani"
	}).toArray().then((user) => {
		console.log('Users');
		console.log(user);
	}, (err) => {
		console.log('Unable to fetch users', err);
	})

	client.close();
});