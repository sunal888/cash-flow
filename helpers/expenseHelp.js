var db = require('../models/modelIndex');

exports.getExpenses = function(req, res){
    db.Expense.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
};

module.exports = exports;