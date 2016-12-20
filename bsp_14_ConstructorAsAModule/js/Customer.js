/*global
window
 */

// namespace pattern
window.BSI = window.BSI || {};

// module pattern
window.BSI.Customer =(function () {
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

    Customer.isCustomer = function () {
        return true;
    };

    Customer.count = function () { // static public
        return count;
    };

    return Customer;
}());