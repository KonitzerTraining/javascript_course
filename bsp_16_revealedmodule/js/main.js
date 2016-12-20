/*global
BSI
 */
(function () {
    "use strict";

    BSI.collection.addItem("Kunde 1");
    var alle = BSI.collection.getAllItems();
    console.log(alle);

    console.log(BSI.collection);
}());