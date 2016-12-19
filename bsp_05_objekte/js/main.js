// Objekt
// verwendet Constructor

// Operator: new
// Funktion: Object
var o = new Object();
o.farbe = "blau";

var o2 = {
    farbe : "yellow",
    2: "test",
    liste: []
}; // Object literal notation
o2.anzahl = 234;

console.log(o2.anzahl);
console.log(o2[2]);

var l = new Array(3,4,5);
var l2 = [3,5,5]; // array literal notation
l.farbe = "blau"; // nicht so gut

console.log(l[2]);
console.log(l["farbe"]);
console.log(l.farbe);