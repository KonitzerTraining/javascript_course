// Datentypen

// string
var text = "Text" + 'Text';
console.log(text, typeof text);
var text1 = "text" + 23;

console.log(text1, typeof text1);

var ausgabe = "";
ausgabe += "Anhang";

// number
var wert1 = 234;
var wert2 = 3e12;
var wert3 = 33.224;
var wert4 = "Kuchen" / 7;
console.log(wert4, typeof wert4, wert4 !== wert4, isNaN(wert4));

var input = "A1";
var wert5 = parseInt(input, 16);
console.log(wert5);

wert1++; // nicht so super
wert1 += 100;

var hex = 0xF3;
var octal = 023;

// boolean
// == != === !== < > <= >=
// && || ! ()
var a = 2 == "2";
console.log(a);

// Implizite Casts immer vermeiden
var b = "2" === "2";
console.log(b);

// immer ===
// nie ==

// undefined
// Nie Floats vergleichen
var wert6 = 0.1 + 0.2;
console.log(wert6);

// object
// .
console.log(typeof console );

// function
console.log(Date, typeof Date);


// weitere Operatoren
// typeof , =