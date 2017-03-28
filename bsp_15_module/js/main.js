/*global
 NAMESPACE
 */
(function () {
    "use strict";

    NAMESPACE.collection.addItem("Kunde 1");


    var alle = NAMESPACE.collection.getAllItems();
    console.log(NAMESPACE);
    console.log(alle);

    console.log(NAMESPACE.collection);
}());