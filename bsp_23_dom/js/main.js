(function () {
    "use strict";

    var daten = [
        {
            "id": "234523",
            "fullname": "Hans Müller"
        },
        {
            "id": "123432",
            "fullname": "Peter Mayer"
        },
        {
            "id": "235345",
            "fullname": "Dieter Bohlen"
        }
    ];
    //var ausgabeElement = document.getElementById("ausgabe");
    var target = document.querySelector("#ausgabe");

    var originalTemplate = target.innerHTML;
    var ausgabe = "";
    daten.forEach(function (kunde) {

        var template = originalTemplate;
        template = template.replace("{{id}}", kunde.id);
        template = template.replace("{{fullname}}", kunde.fullname);
        ausgabe += template;

    });
    target.innerHTML = ausgabe;

}());