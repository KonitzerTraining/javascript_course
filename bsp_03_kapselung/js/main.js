// Kapselung
console.time("Zu Beginn");

// Bilder und so werden auch geladen sein
window.onload = function () {
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