(function () {
    "use strict";

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
                },
                set: function (nId) {
                    customerId = nId;
                }
            },
            sayHello: {
                value: function () {
                    console.log("Hallo");
                    return this; // Method Chaining
                }
            }
        });
        console.log(this);
    };

    var p1 = new Customer("hans", "3242344");

    p1
        .sayHello()
        .sayHello()
        .sayHello();

}());