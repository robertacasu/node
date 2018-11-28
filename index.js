var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var path = require('path');

// middleware per file statici
app.use('/js', express.static (path.join(__dirname, 'public', 'js' )));
app.use('/immagini', express.static (path.join(__dirname, 'public', 'images' )));

app.use('/bootstrap', express.static (path.join(__dirname, 'node_modules', 'bootstrap', 'dist' )));
app.use('/jquery', express.static (path.join(__dirname, 'node_modules', 'jquery', 'dist' )));
app.use('/popper', express.static (path.join(__dirname, 'node_modules', 'popper.js', 'dist', 'umd' )));





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


