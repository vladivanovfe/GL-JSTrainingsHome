// We want to create a function that will add numbers together when called in succession.

let add = (function() {
    let factory = function(value) {
        let adder = function(num) {
            return factory(value + num);
        };
        adder.toString = function() {
            return value;
        };
        return adder;
    };
    return factory(0);
})();

// test
add(1)(2)(3); // should return 6
add(1)(2)(3)(4); // should return 10
add(1)(2)(3)(4)(5); // should return 15