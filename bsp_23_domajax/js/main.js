(function () {
    "use strict";

    var httpRequest = new XMLHttpRequest();

    var dom = function (daten) {
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
    };

    var handleStateChange = function () {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);

                dom(data);
            } else {
                console.log('There was a problem with the request.');
            }
        }
    };


    var init = function () {
        if (!httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            throw "Kein Ajax drin";
        }
        httpRequest.onreadystatechange = handleStateChange;
        httpRequest.open('GET', "http://localhost:8081/customers");
        httpRequest.send();

    };

    init();


}());