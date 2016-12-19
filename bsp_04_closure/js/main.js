// Closure

var system = function (item) { // Closure
    var basket = [];

    return function (item) {
        basket.push(item);
      //  console.log(basket);
    };
};

var shop = system();

shop("Haus");
shop("Baum");
shop("Moped");
shop("Seestern");

console.dir(shop);