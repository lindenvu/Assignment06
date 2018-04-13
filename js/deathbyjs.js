/*eslint-env browser*/

//STEP 1
function alphabetize(str1) {
    "use strict";
    return str1.toLowerCase().split("").sort().join("");
}
window.alert(alphabetize(window.prompt("Enter a word")));
//STEP 2
function capitalize(str2) {
    "use strict";
    return str2.replace(/(\b\w)/gi, function (m) {return m.toUpperCase(); });
}
window.alert(capitalize(window.prompt("Enter a sentence")));
//STEP 3 
function countVowels(str3) {
    "use strict";
    return str3.match("a/g");
}
window.alert(countVowels(window.prompt("Enter a sentence")));
//STEP 4 
function randomString(num4) {
    "use strict";
    var x, y = "", z = parseInt(num4, 10);
    for (x = 0; x < z; x += 1) {
        y += String.fromCharCode(Math.floor(Math.random() * 127));
    }
    return y;
}
window.alert(randomString(window.prompt("Enter a number")));


//STEP 5
