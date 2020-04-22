/*
Create a function called removeValue that removes all of a certain value from an array and then returns the array.
If the array is empty or has no element to remove it should return false. 
*/ 

Array.prototype.removeValue = function (val) {
    return result = this.filter(function(item) {
        return item !== val
    })
}