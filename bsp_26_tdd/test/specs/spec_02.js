/*global
 describe xdescribe it xit expect BSI

 */
(function () {
    "use strict";

    describe("Warenkorb", function () {
        it("should exist", function () {

            expect(BSI.basket).toBeDefined();
        });
        it("should add items", function () {

            expect(BSI.basket.addItem).toBeDefined();
            expect(BSI.basket.addItem).toThrowError("2034");
        });
    });
}());