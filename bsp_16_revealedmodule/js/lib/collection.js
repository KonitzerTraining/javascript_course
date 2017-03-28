/*global
 NAMESPACE window
 */

// namespace pattern
window.NAMESPACE = window.NAMESPACE || {};

// module pattern
window.NAMESPACE.collection = (function () {
    "use strict";
    var basket = [];
    var addItem = function (item) {
        basket.push(item);
    };

    function getAllItems () {
        return basket.slice();
    }

    // Schnittstelle nach Außen
    return {
        addItem: addItem,
        getAllItems:getAllItems,
        version: "2.3.4"
    };

}());