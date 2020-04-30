// The marketing team is spending way too much time typing in hashtags. Let's help them with out own Hashtag Generator!
// It should start with a hashtag (#). All words should have their first letter capitalized. If the final result is longer than 140 chars it should return false. If the input or the result is an empty string it should return false.

function getHashtag (str) {
    let hashtag = str.replace(/\b[a-z]/g, function(s) {return s.toUpperCase()}).replace(/\s+/g,'');

    if (hashtag == '') return false;
    else if (hashtag.length >= 140) return false;
    else return '#' + hashtag;
}

// test
getHashtag('Hello there thanks for trying my Kata') // should return '#HelloThereThanksForTryingMyKata'
getHashtag('    Hello     World   ') // should return '#HelloWorld'
getHashtag('') // should return false