/*global
 window, BSI
 */
window.BSI = window.BSI || {};
window.BSI.basket = (function () {
    "use strict";

    return {
        addItem: function (item) {
            if (typeof item !== "string") {
                throw new Error("2034");
            }
        }
    };
}());