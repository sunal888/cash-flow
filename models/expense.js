var mongoose = require('mongoose');

var expenseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name cannot be blank!'
    },
    amount: {
        type: Number,
        required: 'Amount cannot be blank!'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

var Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;