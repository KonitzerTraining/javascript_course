(function () {
    "use strict";

    var customerFactory = function (vn) {

        // Privat
        var customerId = Math.ceil(Math.random() * 1e8);
        var projekte = ["p1", "p3"];
        // ES3
        return {
            fullname: vn,
            customerId: function () {
                //
                return customerId;
            },
            projekte: function (p) {
                if (typeof p === "string") {
                    projekte.push(p);
                }
                return projekte.slice();
            }
        };
    };

    var c1 = customerFactory("Hans Müller");
    console.log(c1);

    var p = c1.projekte("p34");
    console.log(p);

}());