/*jslint
 es6
 */
(function () {
    "use strict";
    // var - funktion
    // let - if/for/while
    // const - Konstante
    const http = require('http');
    const hostname = '127.0.0.1';
    const port = 3000;

    // Arrow - Funktion
    const server = http.createServer(function (req, res) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Hello World</h1>\n');
        });

    server.listen(port, hostname, () =>
        console.log(`Server running at http://${hostname}:${port}/`)
    );


}());