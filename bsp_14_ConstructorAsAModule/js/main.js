/*global
 NAMESPACE
 */

(function () {
    "use strict";

    var customer1 = new NAMESPACE.Customer("Hans Müller");
    var customer2 = new NAMESPACE.Customer("Hans Müller");
    var customer3 = new NAMESPACE.Customer("Hans Müller");
    var customer4 = new NAMESPACE.Customer("Hans Müller");

    console.log(customer1);
    customer1.sayName();

    console.log(NAMESPACE.Customer.count());
    console.log(NAMESPACE.Customer.isCustomer("abc"));
    console.log(NAMESPACE.Customer.isCustomer(customer4));
}());