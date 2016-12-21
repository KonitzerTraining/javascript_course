/*global
 $
 */
// jQuery
$(document).ready(function () {
    "use strict";

// DOM-Elemente finden
    $("#box1").css({
        backgroundColor: "red"
    });
    $("div:eq(2)").css({
        backgroundColor: "red"
    })

// DOM-Elemente erstellen
    $("<h1>Inhalt</h1>", {id: "main"}).appendTo("body");
    $("h1").before("<h2>Überschrift</h2>");

// DOM-Manipulieren
// Events
    $("#btn1").on("click", function () {
        $("#box1").css({
            backgroundColor: "green"
        })
        ;
    });

// Animationen
    function aniThis (t) {
        $(t)
            .hide(500)
            .show(200)
            .slideDown(100)
            .slideUp(300);
    }


    $("#box2").on("mouseenter", function (e) {
        aniThis(this);
    });

    $("#box1").on("mouseenter", function (e) {
        aniThis(this);
    });

    $("#box3").on("mouseenter", function (e) {
        console.log(this);
        $(this).animate({
            width: "400px"
        }, 300);
    });

    $("#box3").on("mouseleave", function (e) {
        console.log(this);
        $(this).animate({
            width: "150"
        }, 300);
    });

// Ajax


});
