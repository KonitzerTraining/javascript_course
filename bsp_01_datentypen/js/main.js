// Datentypen

// string
var text = "Text" + 'Text';
console.log(text, typeof text);
var text1 = "text" + 23;

console.log(text1, typeof text1); // string

var ausgabe = "";
ausgabe += "Anhang";


// Operatoren
// + Textverkettungsoperator
// typeof Datentyp als String
// = Zuweisungsoperator



// number
var wert1 = 234;
var wert2 = 3e12; // 3 * 10^12
var wert3 = 33.224;
var wertOctal = 0o123; // Oktalzahl
var wertHex = 0xfa3;
var wert4 = "Kuchen" / 7; // NaN - Number
console.log(wert4, typeof wert4, wert4 !== wert4, isNaN(wert4));

var input = "A1";
var wert5 = parseInt(input, 16); // alternativ parseFloat
console.log(wert5);

wert1++; // nicht so super
wert1 += 100;

var ad = 1;
var b = ++ad;
console.log(ad, b);

// Operatoren
// + - * / %

// boolean
// == != === !== < > <= >=
// && || ! ()
var a = 2 == "2"; // -> true
console.log(a);

// Implizite Casts immer vermeiden
var b = "2" === "2"; // !==
console.log(b);

// immer ===
// nie ==

// Logik-Operatoren
// ! && || ()

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


// Alle Datentypen
// number, string, boolean, undefined
var a; // Datentyp undefined , undefined

// Referenztypen
// function, object