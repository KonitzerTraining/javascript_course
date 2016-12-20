/*global
 require
 */
(function () {
    "use strict";

    require(["modul1", "modul2"], function (basket, nochWas) {
        basket.addItem("haus");
        var b = basket.getAllItems();

        console.log(b);
    });


}());
