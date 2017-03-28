// Closure

var system = function () { // Closure

    var basket = [];  // private Variable

    return function (item) {
        basket.push(item);
      //  console.log(basket);
        return basket.slice();
    };
};

var shop = system();

shop("Haus");
shop("Baum");
shop("Moped");
var erg = shop("Seestern");


console.log(erg);
console.log(shop);
console.dir(shop);