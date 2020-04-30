// This time you want to write calculations using functions and get the results.
// There should be a function for each number from 0 ('zero') to 9 ('nine'). There should be a function for each of the following mathematical operations: plus, minus, times, dividedBy. Each calculation consist of exactly one operation and two numbers. The most outer function represents the left operand, the most inner function represents the right operand. Divison should be integer division, e.g eight(dividedBy(three())) should return 2, not 2.666666...;

function recur(n, op) { return (op) ? op.call(op, n) : n; }
function zero(op)     { return recur(0, op); }
function one(op)      { return recur(1, op); }
function two(op)      { return recur(2, op); }
function three(op)    { return recur(3, op); }
function four(op)     { return recur(4, op); }
function five(op)     { return recur(5, op); }
function six(op)      { return recur(6, op); }
function seven(op)    { return recur(7, op); }
function eight(op)    { return recur(8, op); }
function nine(op)     { return recur(9, op); }

function plus(num) {
    return function(res) {
        return res + num;
    };
}
function minus(num) {
    return function(res) {
        return res - num;
    };
}
function times(num) {
    return function(res) {
        return res * num;
    };
}
function dividedBy(num) {
    return function(res) {
        return Math.floor(res / num);
    };
}

// test
seven(times(five())); // should return 35
four(plus(nine())); // should return 13
eight(minus(three())); // should return 5
six(dividedBy(two())); // should return 3