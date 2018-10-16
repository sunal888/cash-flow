var mongoose = require("mongoose");
var expense = require("./models/expense");

var data = [
    {
        name: "NTUC grocery", 
        amount: 34.2,
    },
    {
        name: "Diapers", 
        amount: 56.8,
    },
    {
        name: "market", 
        amount: 50,
    },
    {
        name: "breakfast", 
        amount: 5.6,
    },
    {
        name: "utilities", 
        amount: 304,
    }
]

function seedDB(){
   //Remove all campgrounds
   expense.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed all expenses!");
         //add a few campgrounds
        data.forEach(function(seed){
            expense.create(seed, function(err, newExpense){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a newExpense");
                }
            });
        });
    }); 
}

module.exports = seedDB;
