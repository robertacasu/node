var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json())

//ROUTING DI BASE -> req rest li scelgo io
app.get('/', function (request, response) {
    response.sendFile(__dirname + "/public/index.html");
});

//middleware routing
app.use('/users', require('./utenti/utenti.js'));


//AVVIO DEL SERVER
app.listen(3000, function () {
    console.log("il server è partito")
});


