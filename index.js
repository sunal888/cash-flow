var express         = require('express'),
    app             = express(),
    port            = process.env.PORT || 3000,
    bodyParser      = require('body-parser'),
    seedDB          = require("./seeds");

var expenseRoutes = require("./routes/expensesRoute");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname +'/public'));
app.use(express.static(__dirname + '/views'));

// seedDB(); //seed the database

app.get("/", function(req, res){
    res.sendFile("index.html")
});

app.use('/api/expenses', expenseRoutes);

app.listen(port, function(){
    console.log("cash-flow APP IS RUNNING ON PORT " + port);
})