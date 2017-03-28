// Kapselung
console.time("Zu Beginn");

// Bilder und so werden auch geladen sein
window.onload = function () {
    // Lokaler Sichtbarkeitsbereich
    // Wenn alles geladen
    console.log("Alles Da");
    console.timeEnd("Rest");
};




// Falls Script im head
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM da");
    console.timeEnd("Zu Beginn");
    console.time("Rest");
});

// 2. Durchlauf wegen dem + Operator
+function () {
// Geammter Applikations-Code
// zur Erschaffung eines Block-Level-Scopes
    if(true) {
        var i = 1;
    }

}();

// immediately invoked function expression
(function () {
    // Applikation
    var ausgabe = function () {
        console.log("IIFE");
    };

    ausgabe();
}());


var listeString = [3,3,4].join(", ");
console.log(listeString);

if(true) {
    let i = 1; // lokale Variable zum Block - ES 2015 (IE 11)
}

// https://kangax.github.io/compat-table/es6/
// caniuse.com/