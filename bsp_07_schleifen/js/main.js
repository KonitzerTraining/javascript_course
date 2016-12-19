(function () {
    "use strict";

    var person = {
        fullname: "Hans Müller",
        address: "Im Zeil 55",
        town: "Munich"
    };
    var liste = [3,4,5];
    var k;
    var i;
    var l;
    var keys;

    for(k in person) {
        console.log(k, person[k]);
    }

    l = liste.length;

    // noch performanter, wenn gegen Null gezählt wird
    for(i = 0; i < l; i+=1) {
        console.log(liste[i]);
    }

    keys = Object.keys(person);
    l = keys.length;
    for(i = 0; i < l; i+=1) {
        console.log(person[keys[i]]);
    }
    
    liste.forEach(function (element) {
        console.log(element);
    });

    keys.forEach(function (key) {
        console.log(person[key]);
    });

}());

// iife ist ein gute Kandidat für
// für ein Code-Snippet oder Live-Template