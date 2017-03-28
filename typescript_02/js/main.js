var Person = (function () {
    function Person(vn) {
        this.vorname = vn;
    }
    Object.defineProperty(Person.prototype, "a", {
        get: function () {
            return "ASDF";
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.sayName = function () {
        console.log(this.vorname);
    };
    return Person;
}());
