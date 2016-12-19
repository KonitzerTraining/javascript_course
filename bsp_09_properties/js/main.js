(function () {
    "use strict";

    // ES 5
    var o = Object.defineProperties({}, {
        color: {
            value: "green",
            writable: true,
            configurable: false, // löschbar?
            enumerable: true
        },
        projekte : {
            value: Object.freeze(["p1"]),
            enumerable: true
        }
    });

    o.color = "blau";
   // o.projekte.push("234");

    Object.freeze(o.projekte);
    //o.projekte.push("5354");
    console.log(o);

    for(var k in o) {
        console.log(o[k]);
    }

}());