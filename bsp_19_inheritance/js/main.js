// Supertype
var Ware = (function () {
    "use strict";

    var Ware = function (p) {
        this.price = p;
    };

    Ware.prototype.makeLabel = function () {
        return "€ " + this.price;
    };

    return Ware;
}());


var Kleidung = (function () {
    "use strict";

// Subtype
    var Kleidung = function (g, p) {
        this.groesse = g;

// constructor stealing
        Ware.call(this, p);
    };


// prototypal inheritance
    Kleidung.prototype = Object.create(Ware.prototype, {
        constructor: {
            value: Kleidung
        },
        passtDas: {
            value: function (aktuell) {
                if (this.groesse === aktuell) {
                    return "passt";
                } else {
                    return "passt nicht";
                }
            }
        }
    });
    return Kleidung;
}());


(function () {
    "use strict";


    var k1 = new Kleidung("M", 99.90);

    console.log(k1);

    console.log(k1.passtDas("L"));

    console.log(k1.makeLabel());

}());