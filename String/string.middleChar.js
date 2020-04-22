/*
Write the function returning the middle character in the word. If the word length is even, return 2 middle characters.
*/

function getMiddle(str) {
    let position, length;
    if ((str.length % 2) == 0) {
        position = str.length / 2 - 1;
        length = 2;
    } else {
        position = (str.length - 1) / 2;
        length = 1;
    }
    
    return str.substring(position, position + length);
}