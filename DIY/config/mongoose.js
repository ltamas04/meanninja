var mongoose = require('mongoose'),
  config = require('./config');

module.exports = function() {
  var db = mongoose.connect(config.db);

  //schema need

  return db;
}