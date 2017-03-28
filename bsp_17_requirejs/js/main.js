/*global
 require
 */
(function () {
    "use strict";

    require(["modul1"], function (basket) {
        
        basket.addItem("haus");
        var b = basket.getAllItems();

        console.log(b);
    });


}());
