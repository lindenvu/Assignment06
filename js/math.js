/*eslint-env browser*/

//STEP 1
var numPrompt1 = window.prompt("Enter a number");
window.alert(Math.abs(numPrompt1));
//STEP 2
var fltPrompt2 = window.prompt("Enter a decimal number");
window.alert(Math.ceil(fltPrompt2));
//STEP 3
var fltPrompt3 = window.prompt("Enter a decimal number");
window.alert(Math.floor(fltPrompt3));
//STEP 4
var strArray4 = window.prompt("Enter 5 numbers separated by commas, ie: 1,2,3,4,5").split(",");
window.alert(Math.max(strArray4[0], strArray4[1], strArray4[2], strArray4[3], strArray4[4]));
//STEP 5
var numPrompt5 = window.prompt("Enter a number");
window.alert(Math.sqrt(numPrompt5));