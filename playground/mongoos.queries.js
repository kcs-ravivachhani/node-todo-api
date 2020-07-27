const { mongoos } = require('./../server/db/mongoos');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

//var id = '5f1ab270d843802cc8d734e4';
var uid = '5f1ab85d8d3513395c1818d2';

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

User.findById(uid).then((user) => {
	if (!user) {
		return console.log('User not found');
	}
	console.log('User detail', user);
}).catch((e) => { console.log(e); });