var db = require('../models/modelIndex');

exports.getExpenses = function(req, res){
    db.Expense.find()
    .then(function(expenses){
        res.json(expenses);
    })
    .catch(function(err){
        res.send(err);
    })
};

exports.createExpense = function(req, res){
    db.Expense.create(req.body)
    .then(function(newExpense){
        res.status(201).json(newExpense);
    })
    .catch(function(err){
        res.send(err);
    })
  }
  
exports.getExpense = function(req, res){
     db.Expense.findById(req.params.expenseId)
     .then(function(foundExpense){
         res.json(foundExpense);
     })
     .catch(function(err){
         res.send(err);
     })
  }
  
exports.updateExpense =  function(req, res){
     db.Expense.findOneAndUpdate({_id: req.params.expenseId}, req.body, {new: true})
     .then(function(expense){
         res.json(expense);
     })
     .catch(function(err){
         res.send(err);
     })
  }
  
  exports.deleteExpense = function(req, res){
     db.Expense.remove({_id: req.params.expenseId}) 
     .then(function(){
         res.json({message: 'We deleted it!'});
     })
     .catch(function(err){
         res.send(err);
     })
  }
  

module.exports = exports;