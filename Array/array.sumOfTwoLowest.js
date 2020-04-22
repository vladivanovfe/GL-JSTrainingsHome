/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.
*/

function sumTwoSmallestNumbers(numbers) {
    let arr = numbers.sort((a, b) => a - b);
    return arr[0] + arr[1];
}