// Sichtbarkeit
// globaler Bereich

var a = 1;
app();
function app () {
    // lokaler Sichtbarkeitsbereich

    console.log(a);
    var b = 234; // lokale Variable
    c = 3434; // globale Variable
}

var b = app;
b();

console.log(c);

// Funktionsausdruck
var myApp = function (wertX) {
    var wert;
    wertX = 232344234;
    console.log(wertX);
    //var wert = 45; Hoisting!!!
    wert = 34;
    console.log(wert);
};
var wert = "233";
myApp(wert);

console.log(wert);


// 2 Interpreterdurchläufe
// 1. Durchlauf:
// Funktionen werden an den Anfang des aktuellen
// Sichtbrkeitsbereichs gestellt
// 2. Durchlauf
// Ausdruck wird ausgewertet