/*
You need to write a function that checks if the word uses the same letter more than once. Assume the empty string returns true. Ignore letter case.
*/

let isIsogram = (str) => str.split("").every((char, i) => str.indexOf(char) == i);
