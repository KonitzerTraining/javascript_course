/*global
 window, NAMESPACE
 */

// namespace pattern
window.NAMESPACE = window.NAMESPACE || {};

// module pattern
window.NAMESPACE.collection = (function () { // Closure
    "use strict";

    var basket = []; // privat

    // ES5
    return Object.create({
        addItem: function (item) {
            basket.push(item);
        },
        getAllItems : function () {
            return basket.slice();
        }
    }, {
        version : {
            value: "2.3.4"
        }
    });

}());