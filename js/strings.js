/*eslint-env browser*/

//STEP 1
var strName1 = window.prompt("Enter your name");
window.alert(strName1.length);
//STEP 2
var strName2 = window.prompt("Enter your name");
var numIndex2 = window.prompt("Enter a number");
window.alert(strName2.charAt(numIndex2));
//STEP 3
var strFirstName3 = window.prompt("Enter your first name");
var strLastName3 = window.prompt("Enter your last name");
window.alert("Your name is: ".concat(strFirstName3).concat(" ").concat(strLastName3));
//STEP 4
var strPhrase4 = "The quick brown fox jumps over the lazy dog";
window.alert(strPhrase4.indexOf("fox"));
//STEP 5
var strPhrase5 = "The quick brown fox jumps over the lazy fox";
window.alert(strPhrase5.lastIndexOf("fox"));
//STEP 6
var strPhrase6 = "The quick brown fox jumps over the lazy dog";
var strName6 = window.prompt("Enter your full name");
window.alert(strPhrase6.replace("the lazy dog", strName6));
//STEP 7
var strPhrase7 = "The quick brown fox jumps over the lazy dog";
var strWord7 = window.prompt("Enter a word");
window.alert(strPhrase7.search(strWord7));
//STEP 8
var old_string = "The quick brown fox jumps over the lazy dog";
var new_string = old_string.slice(31, 43);
window.alert(new_string.toUpperCase());
//STEP 9
var strPhrase9 = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
window.alert(strPhrase9.trim().toLowerCase());
//STEP 10
var strPhrase10 = "the quick brown fox jumps over the lazy dog";
window.alert(strPhrase10.slice(0, 1).toUpperCase() + strPhrase10.slice(1));