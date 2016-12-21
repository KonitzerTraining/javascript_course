(function () {
    "use strict";

    //
    //var ausgabeElement = document.getElementById("ausgabe");
    var target = document.querySelector("#ausgabe");

    var originalTemplate = target.innerHTML;
    var template = originalTemplate;

    template = template.replace("{{id}}", "ID aus Daten");
    template = template.replace("{{fullname}}", "Hans oder so");

    target.innerHTML = template;

}());