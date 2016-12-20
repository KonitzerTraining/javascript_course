/*global
BSI
 */

(function () {
    "use strict";

    var customer1 = new BSI.Customer("Hans Müller");
    var customer2 = new BSI.Customer("Hans Müller");
    var customer3 = new BSI.Customer("Hans Müller");
    var customer4 = new BSI.Customer("Hans Müller");

    console.log(customer1);
    customer1.sayName();

console.log(BSI.Customer.count());
}());