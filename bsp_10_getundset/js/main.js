(function () {
    "use strict";

    var objFactory = function () {

        var color = {
            r: 0x12,
            g: 0xA2,
            b: 0xd1
        };

        var obj = Object.defineProperties({}, {

            HEXcolor: {
                get: function () {1
                    return color; // #12A2d
                }
            }
        });
        return obj;
    };

    var obj = objFactory();

    console.log(obj.HEXcolor);
}());