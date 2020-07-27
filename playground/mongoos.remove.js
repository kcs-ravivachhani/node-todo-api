const { mongoos } = require('../server/db/mongoos');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

Todo.findById('5f1e652f40a57061773b2901').then((todo) => {
	console.log(todo);
});

Todo.findOneAndRemove({
	_id: '5f1e652f40a57061773b2901'
}).then((todo) => {
	console.log(todo);
});