/*global
 describe xdescribe it xit expect NAMESPACE

 */
(function () {
    "use strict";

    describe("Warenkorb", function () {
        it("should exist", function () {

            expect(NAMESPACE.basket).toBeDefined();
        });

        it("should add items", function () {

            expect(NAMESPACE.basket.addItem).toBeDefined();
            expect(NAMESPACE.basket.addItem).toThrowError("2034");
        });
    });
}());