/*
Create a function called remove that removes element of an array by its index and then returns the array. If the array is empty or has no element to remove it should return false.
*/

Array.prototype.remove = function(i) {
    return this.slice(0, i).concat(this.slice(i+1, this.length))
}