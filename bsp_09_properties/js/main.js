(function () {
    "use strict";

    var o1 = {
        eigenschaft : Object.freeze(["asdf"])
    };

//      Object.seal(o1);
    Object.freeze(o1);

   // delete o1.eigenschaft;

   //    o1.eigenschaft.push = 234;

    console.log(o1);

       // ES 5
    var o = Object.defineProperties({
        a: 2
    }, {
        color: {
            value: "green",
            writable: true, // Standard: immer false
            configurable: false, // löschbar?
            enumerable: true
        },
        projekte : {
            value: Object.freeze(["p1"]),
            enumerable: true
        },
        sayColor : {
            value: function () {
                return this.color;
            },
            enumerable: true
        }
    });

    o.color = "blau";
   // o.projekte.push("234");

    Object.freeze(o.projekte);
    //o.projekte.push("5354");
    console.log(o);

    for(var k in o) {
        console.log(o[k]);
    }

}());