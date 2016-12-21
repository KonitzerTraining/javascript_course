/*global
 $
 */
$(document).ready(function () {
    "use strict";

    var dom = function (res) {
        $.each(res, function (index, element) {
            console.log(element);
           $([
               "<article>",
               element.fullname,
               "</article>"
           ].join("")).appendTo("body");
        });
    };

    $.getJSON("http://localhost:8081/customers", function (response) {
        dom(response);
    });
});