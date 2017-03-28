(function () {
    "use strict";

    // new erstellt ein Objekt
    // Object bekommt einen neuen Kontext
    // Object wird ausgeführt
    // Referenz auf Objekt wird zurück gegeben

    var obj = new Object();

    /**
     * Erstellt einen Kunden
     * @param fn
     * @constructor
     */
    var Customer = function (fn, customerId) { // Closure

        // ES3
        this.fullname = fn;

        // ES5
        Object.defineProperties(this, {
            cid: {
                get: function () {

                    return customerId;
                }
            },
            sayName : {
                value: function () {
                    return "hallo";
                }
            }
        });

        Object.seal(this);
    };

    var c = new Customer("Hans Müller", "923902348");

    //c.neueEigenschaft = 234;
    console.log(c, typeof c);
    console.log(c instanceof Customer);
    console.log(c instanceof Object);

    var o = null;
    console.log(o, typeof o, o instanceof Object);

    function f1 (c) {
        console.log(c);
        if(c instanceof Customer) {

        } else {
            throw new Error("Kein Kunde übergeben");
        }
    }

    f1("Hans Müller");

}());