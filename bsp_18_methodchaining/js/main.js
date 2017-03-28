(function () {
    "use strict";

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
            }
        });
        console.log(this);
    };

    Customer.prototype.sayHello = function () {
        console.log("Hallo");
        return this; // Method Chaining
    };

    var p1 = new Customer("hans", "3242344");

    p1
        .sayHello()
        .sayHello()
        .sayHello();

}());