var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/budget-api', { useNewUrlParser: true });

mongoose.Promise = Promise;

module.exports.Expense = require("./expense");