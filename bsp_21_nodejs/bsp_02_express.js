(function () {
    "use strict";

    var express = require('express');
    var app = express();

    app.get('/', function (req, res) {
        console.log(req.query);
        res.send('Hello World - Startseite!');
    });

    app.get('/products', function (req, res) {
        console.log(req);
        res.send('Hello World - Produkte!');
    });

    app.listen(3000, function () {
        console.log('Example app listening on port 3000!');
    });

}());
