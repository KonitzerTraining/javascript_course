/*global
 NAMESPACE
 */

// namespace pattern
this.NAMESPACE = this.NAMESPACE || {};

// module pattern
NAMESPACE.Customer =(function () { // Closure
    "use strict";

    var count = 0;  // static privat
    // constructor pattern
    var Customer = function (fn) {

        count += 1;
        this.fullname = fn;

    };
    // prototype pattern
    Customer.prototype.sayName = function () {
        console.log(this.fullname);
    };

    Customer.isCustomer = function (c) {
        if(c.constructor === this) {
            return true;
        }
        return false;
    };

    Customer.count = function () { // static public
        return count;
    };

    return Customer;
}());