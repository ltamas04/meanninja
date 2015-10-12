var users = require('../../app/controllers/user.server.controller.js');

module.exports = function(app) {
	app.route('/users')
		.post(users.create)
		.get(users.list);

	app.route('/users/:Id')
		.get(users.read)

	app.param('Id', users.userByID);
};