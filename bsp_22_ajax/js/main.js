(function () {
    "use strict";

    var httpRequest = new XMLHttpRequest();

    var handleStateChange = function () {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                console.log(httpRequest.responseText);
            } else {
                console.log('There was a problem with the request.');
            }
        }
    };

    if (!httpRequest) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        throw "Kein Ajax drin";
    }
    httpRequest.onreadystatechange = handleStateChange;
    httpRequest.open('GET', "http://localhost:8081/customers");
    httpRequest.send();

}());