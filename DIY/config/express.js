var express = require('express'),
	config = require('./config'),
	bodyParser  = require('body-parser');

module.exports = function() {
	var app = express();

	app.use(bodyParser.json());

	require('../app/routes/user.server.routes.js')(app);

	return app;
}
