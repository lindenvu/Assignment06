/*eslint-env browser*/

//STEP 1
var dateToday1 = new Date();
var daysArray1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
window.alert(daysArray1[dateToday1.getMonth()]);
//STEP 2
var dateToday2 = new Date();
var monthsArray2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
window.alert(monthsArray2[dateToday2.getMonth()]);
//STEP 3
var dateToday3 = new Date();
var dayArray3 = ["Weekend", "Weekday", "Weekday", "Weekday", "Weekday", "Weekday", "Weekend"];
window.alert(dayArray3[dateToday3.getDay()]);
//STEP 4
var dateToday4 = new Date();
var yesterdayArray4 = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
window.alert(yesterdayArray4[dateToday4.getDay()]);
//STEP 5
var dateToday5 = new Date();
var dayArray5 = ["S", "M", "T", "W", "T", "F", "S"];
window.alert(dayArray5[dateToday5.getDay()]);