(function () {
    "use strict";

    var liste = [2];
    console.groupCollapsed();

    liste.push(4);
    console.log(liste);
    console.dir(liste);

    console.dir(Array);

    console.log(Array.isArray(liste));

    console.dir(Array.prototype.push === liste.push);
    /*
    var f1 = new Function("alert('hä');");
    f1();
*/

    var Person = function () {

    };

    Person.prototype.abteilung = "Vertrieb";
    Person.prototype.kunden = ["234","4353534"];
    var p = new Person();
    console.log(p.abteilung);
    console.dir(p);
    p.abteilung = "Konstruktion";
    console.dir(p);
    delete p.abteilung;
    console.log(p.abteilung);


console.groupEnd();

    var p1 = new Person();

    console.log(p.kunden) ;
    p.kunden.push("234432320349438");
    console.log(p.kunden) ;
    console.log(p1.kunden) ;

}());