/*
Create a function called sum that calculate a sum of the array elements and then returns a number. If the array is empty or has no element to calculate it should return 0.
*/

Array.prototype.sum = function () {
    return this.reduce((a, b) => a + b)
}