var color = "green";
//var globaleVariable;
(function () {
    "use strict";  //  kein Zugriff auf Globale

    //globaleVariable = "234";

    var context = {
        color: "blue"
    };

    var context2 = {
        color: "yellow",
        sayColor : function (p) {
            console.log(p, this.color);
        }
    };

    var sayColor = function (p) {
        console.log(p, this.color);
    };

    sayColor.apply(context, ["apply"]);
    sayColor.call(context, "call");

    var neu = sayColor.bind(context);
    neu("bind");

    sayColor("Ohne");

    context2.sayColor("Context2");
    var sC = context2.sayColor;

    sC.call(context, "rausgelöst");
}());