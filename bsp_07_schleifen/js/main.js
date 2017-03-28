(function () {
    "use strict";

    var person = {
        fullname: "Hans Müller",
        address: "Im Zeil 55",
        town: "Munich"
    };
    var liste = [3, 4, 5];
    var k;
    var i;
    var l;
    var keys;

    for (k in person) {  //  ES 3
        console.log(k, person[k]);
    }

    l = liste.length;

    // noch performanter, wenn gegen Null gezählt wird
    for (i = 0; i < l; i += 1) {  //  ES 3
        console.log(liste[i]);
    }

    keys = Object.keys(person);
    l = keys.length;
    for (i = 0; i < l; i += 1) {
        console.log(person[keys[i]]);
    }


    liste.forEach(function (element, index, original) {  //  ES 5
        console.log(element);
    });


    keys = Object.keys(person);  //  ES 5
    keys.forEach(function (key) {  //  ES 5
        console.log(person[key]);
    });

}());

// iife ist ein guter Kandidat für
// ein Code-Snippet oder Live-Template
