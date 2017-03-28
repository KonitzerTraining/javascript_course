// Sichtbarkeit
// globaler Bereich

var a = 1; // global
app();
function app () {
    // lokaler Sichtbarkeitsbereich

    console.log(a);
    var b = 234; // lokale Variable
    c = 3434; // globale Variable
    for(var i = 0; i<3; i++) {
        ;
    }
}


var b = app;
b();

// 2 Inpreterdurchläufe
// 1. Durchlauf
// Sammelt Funktionsdefinitionen ein.

console.log(c);

// Funktionsausdruck
// erst für den 2. Durchlauf
var myApp = function (wertX) {
    var wert;
    wertX = 232344234;
    console.log(wertX);
    console.log(wert); // höherer Sichbarkeitsbereich
    //var wert = 45; //Hoisting!!!
    wert = 45;
    console.log(wert);
};

var wert = "233";
myApp(wert); // hier: call-by-value

console.log(wert);


// 2 Interpreterdurchläufe
// 1. Durchlauf:
// Funktionen werden an den Anfang des aktuellen
// Sichtbarkeitsbereichs gestellt
// 2. Durchlauf
// Ausdruck wird ausgewertet

// -> Alle Variablen müssen an den Anfang