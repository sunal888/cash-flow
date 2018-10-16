var express = require('express');
var router = express.Router();
var db = require("../models/modelIndex");
var expenseHelp = require("../helpers/expenseHelp");

router.route('/')
 .get(expenseHelp.getExpenses)
 .post(expenseHelp.createExpense);
 
router.route('/:expenseId')
  .get(expenseHelp.getExpense)
  .put(expenseHelp.updateExpense)
  .delete(expenseHelp.deleteExpense)
  
module.exports = router;