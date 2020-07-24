var mongoos = require('mongoose');

var User = mongoos.model('Users', {
	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 1
	}
});

// var newUser = new User({
// 	email: ' test@mail.com '
// });

// newUser.save().then((user) => {
// 	console.log(user);
// }, (e) => {
// 	console.log('Unable to save user', e)
// });

module.exports = {
	User
}