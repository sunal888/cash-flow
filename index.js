var express         = require('express'),
    app             = express(),
    port            = process.env.PORT || 3000,
    bodyParser      = require('body-parser'),
    seedDB          = require("./seeds");

var expenseRoutes = require("./routes/expensesRoute");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// seedDB(); //seed the database

app.get("/", function(req, res){
    res.send("this is the root route");
});

app.use('/api/expenses', expenseRoutes);

app.listen(port, function(){
    console.log("cash-flow APP IS RUNNING ON PORT " + port);
})