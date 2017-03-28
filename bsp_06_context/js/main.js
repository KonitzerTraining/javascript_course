// 2 Konzepte
// 1. Sichtbarkeit / Gültigkeitsbereich von Variablen
// 2. Kontext - Akeutelle Objekt

// Neue Eigengschaft für window
var color = "green";

console.log(color);
console.log(window.color);
console.log(this.color);

//var globaleVariable;
(function () {
    //"use strict";  //  kein Zugriff auf Globale
    //globaleVar = 234;

    console.log(this);
    //globaleVariable = "234";

    var context = {
        color: "blue"
    };

    var sayColor = function (p) {
        console.log(p, this.color);
    };

    try {
        sayColor("Ohne");
    } catch (e) {
    }

    var context2 = {
        color: "yellow",
        sayColor: function (p) {
            console.log(p, this.color);
        }
    };
    context2.sayColor("Context2");

   // console.dir(sayColor);

    sayColor.apply(context, ["apply"]);
    sayColor.call(context, "call");


    var neu = sayColor.bind(this);
    neu("bind");

    var sC = context2.sayColor.bind(context2);

    sC();

    sC.call(context, "rausgelöst");
}());