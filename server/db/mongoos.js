var mongoos = require('mongoose');

mongoos.Promise = global.Promise;
//mongoos.connect('mongodb://localhost:27017/TodoApp');
mongoos.connect('mongodb://heroku_hl1k9ggr:olkgobajbdvgfq482qtoloj7pg@ds017736.mlab.com:17736/heroku_hl1k9ggr');

module.exports = {
	mongoos
};