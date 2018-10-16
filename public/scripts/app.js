$(document).ready(function(){
    $.getJSON("/api/expenses")
    .then(function(data){
        console.log(data);
    });
});