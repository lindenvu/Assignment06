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
    return str2.replace(/(\b\w)/gi,function(m){return m.toUpperCase();});
}
window.alert(capitalize(window.prompt("Enter a sentence")));
//STEP 3

//STEP 4

//STEP 5
