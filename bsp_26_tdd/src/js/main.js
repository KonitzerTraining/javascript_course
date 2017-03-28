/*global
 window, BSI
 */
window.NAMESPACE = window.NAMESPACE || {};
window.NAMESPACE.basket = (function () {
    "use strict";

    return {
        addItem: function (item) {
            if (typeof item !== "string") {
               throw new Error("2034");
            }
        }
    };
}());