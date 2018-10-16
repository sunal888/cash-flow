var express = require('express');
var router = express.Router();
var db = require("../models/modelIndex");
var expenseHelp = require("../helpers/expenseHelp");

router.route('/')
 .get(expenseHelp.getExpenses)
//  .post(expenseHelp.createTodo)
 
// router.route('/:todoId')
//   .get(expenseHelp.getTodo)
//   .put(expenseHelp.updateTodo)
//   .delete(expenseHelp.deleteTodo)
  
module.exports = router;