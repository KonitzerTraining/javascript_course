(function () {
    "use strict";

    var liste = [2];
    console.group();

    liste.push(4);
    console.log(liste);
    console.dir(liste);


    //var f1 = new Function("alert('uahh')");
    // f1();

    console.dir(Array);

    // static
    console.log(Array.isArray(liste));

    // Method
    console.log(Array.prototype);


    console.log(Array.prototype.push === liste.push);


    var Person = function () {
    };


    Person.prototype.abteilung = "Vertrieb";

    Person.prototype.kunden = ["234", "4353534"];
   // Object.freeze(Person.prototype.kunden);

    var p = new Person();
    console.log(p.abteilung);
    console.log(p.kunden);

    p.abteilung = "Konstruktion";
    console.dir(p.abteilung);
    console.dir(p);
    delete p.abteilung;
    console.log(p.abteilung);

    console.groupEnd();

    var p1 = new Person();

    console.log(p.kunden);

    p.kunden.push("234432320349438");
    console.log(p.kunden);
    console.log(p1.kunden);

}());