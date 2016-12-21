(function () {
    "use strict";

    var express = require('express');
    var app = express();
    var fs = require("fs");

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); // unsicher, besser nur eine domain
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.get('/customers', function (req, res) {
        fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
            console.log(data);
            res.end(data);
        });
    });

    var server = app.listen(8081, function () {


        console.log("Example app listening at http://%s:%s", "localhost", 8081);

    });


}());