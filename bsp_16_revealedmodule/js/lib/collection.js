/*global
 window
 */

// namespace pattern
window.BSI = window.BSI || {};

// module pattern
window.BSI.collection = (function () {
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