window.onerror = function (msg) {
    alert("Es ist ein Fehler aufgetreten. Bitte später noch einmal versuchen.");
    console.dir(msg);
};

(function () {
    "use strict";

    function app(a) {

        if (a === undefined) {
            //throw "Fehlerhafter Datentyp";
            //throw "asdf";
            throw new TypeError(38474);
        }
    }

    try {
        app();
    } catch (e) {

        switch (e.name) {
            case "TypeError":
                console.log("ok");
                break;

        }

        console.dir(e.name); //"TypeError"
        console.log(e.message);  // "38474"
        console.log(e.fileName);   // "someFile.js"
        console.log(e.lineNumber);           // 10
        console.log(e.columnNumber);         // 0
        console.log(e.stack);                // "@Scratchpad/2:2:9\n"


        var image = new Image();
        image.src = "http://localhost:3000/?id=" + e.message;
    }
}());