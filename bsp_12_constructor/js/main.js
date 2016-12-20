(function () {
    //"use strict";

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
    var Customer = function (fn, customerId) {

        // ES3
        this.fullname = fn;

        Object.defineProperties(this, {
            cid: {
                get: function () {

                    return customerId;
                }
            }
        });
        console.log(this);
    };

    var c = new Customer("Hans Müller", "923902348");

    console.log(c, typeof c);
    console.log(c instanceof Customer);
    console.log(c instanceof Object);

    var o = null;
    console.log(o, typeof o, o instanceof Object);

}());