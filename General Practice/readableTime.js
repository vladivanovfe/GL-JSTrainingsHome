// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a readable format (HH:MM:SS). Where HH = hours, padded to 2 digits, range: 00 - 99; MM = minutes, padded to 2 digits, range: 00 - 59; SS = seconds, padded to 2 digits, range: 00 - 59.
// The maximum time never exceeds 359999 (99:59:59)

function secondsToTime(secs) {
    secc = Math.round(secs);
    
    let hours = Math.floor(secs / (60 * 60));
    
    let divMin = secs % (60 * 60);
    let minutes = Math.floor(divMin / 60);

    let divSec = divMin % 60;
    let seconds = Math.ceil(divSec);

    if (hours   < 10) {hours   = "0" + hours;}
    if (minutes < 10) {minutes = "0" + minutes;}
    if (seconds < 10) {seconds = "0" + seconds;}
    return hours + ':' + minutes + ':' + seconds;
}

// test
secondsToTime(359999) // should return '99:59:59'